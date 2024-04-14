"use client";
import React, { useEffect, useState } from "react";
import NavbarSubroutes from "./NavbarSubroutes";
import { MdArrowForwardIos } from "react-icons/md";

type MenuSubsetItem = {
  id: string;
  name: string;
};

type MenuCategoryItem = {
  id: string;
  title: string;
  subset?: MenuSubsetItem[];
};

type menuItemType = {
  id: string;
  title: string;
  category?: MenuCategoryItem[];
};

type menuItemsProps = menuItemType;

const NavbarItem: React.FC<menuItemsProps> = (menuItem) => {
  const [isShowSubsetMenu, setIsShowSubsetMenu] = useState(false);
  // const [isShowSubRoute , setIsShowSubRoute] = useState<boolean>(false)

  const toggleSubsetMenu = () => {
    setIsShowSubsetMenu(!isShowSubsetMenu);
  };
  return (
    <div className="overflow-auto">
      <p onClick={toggleSubsetMenu} className="flex items-center ">
        {menuItem.title}
        {menuItem.category &&  <MdArrowForwardIos className={`transition-all duration-200 mx-2 text-sm ${isShowSubsetMenu ? 'rotate-90' : 'rotate-0'}`}/> }
      </p>
      {isShowSubsetMenu && (
        <ul className="bg-lime-100  child:my-1  child:py-1 child:text-sm">
          {menuItem.category?.map((item) => (
            <li className="ms-5">
              <NavbarSubroutes key={item.id} {...item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarItem;
