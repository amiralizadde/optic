import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

type subsetTypes = {
  id: string;
  name: string;
};

type sebsetItemTypes = {
  id: string;
  title: string;
};

type NavbarSubroutesTypes = {
  id: string;
  title: string;
  subset?: subsetTypes[];
};

const NavbarSubroutes: React.FC<NavbarSubroutesTypes> = ({
  id,
  title,
  subset,
}) => {
  const [isShowSubRoute, setIsShowSubRoute] = useState<boolean>(false);

  useEffect(() => {
    console.log("submenu");
  }, []);

  return (
    <>
      <p
        onClick={() => setIsShowSubRoute(!isShowSubRoute)}
        className="flex items-center"
      >
        <span>{title}</span>
        {subset && (
          <MdArrowForwardIos
            className={`transition-all duration-200 mx-2 text-sm ${
              isShowSubRoute ? "rotate-90" : "rotate-0"
            }`}
          />
        )}
      </p>
      {isShowSubRoute && (
        <div className="overflow-auto child:py-2 my-2 bg-lime-200  2xs:ps-5">
          {subset?.map((subroute) => (
            <div className="ps-2 xs:list-disc">
              <Link href="/allProducts">{subroute.name}</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavbarSubroutes;
