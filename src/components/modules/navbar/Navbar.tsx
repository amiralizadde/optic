"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./navbar.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import NavbarItem from "./NavbarItem";

type MenuSubsetItem = {
  id: string;
  name: string;
};

type MenuCategoryItem = {
  id: string;
  title: string;
  subset?: MenuSubsetItem[];
};

type MenuItem = {
  id: string;
  title: string;
  category?: MenuCategoryItem[];
};

const Navbar = () => {
  const [showCollapsMenu, setShowCollapsMenu] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isShowSubsetMenu, setIsShowSubsetMenu] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const menuData: MenuItem[] = [
    {
      id: "1",
      title: "Home",
    },
    {
      id: "2",
      title: "Products",
      category: [
        {
          id: "1",
          title: "3D Measurement",
          subset: [
            { id: "1", name: "Optical 3D Nano Profilometer" },
            { id: "2", name: "Optical 3D Micro Profilometer" },
          ],
        },
        {
          id: "2",
          title: "Spectrometer",
          subset: [
            { id: "1", name: "Spectrometer" },
            { id: "2", name: "Spectrophotometer" },
          ],
        },
        {
          id: "3",
          title: "Opto Electronic",
          subset: [
            { id: "1", name: "Spatial Light Modulator" },
            { id: "2", name: "RGB LED Light Source" },
            { id: "3", name: "Diode Laser Source" },
          ],
        },
        {
          id: "4",
          title: "Opto Mechanic",
          subset: [
            { id: "1", name: "Motorized Translation Stage" },
            { id: "2", name: "Piezo Nano Positioner" },
            { id: "3", name: "Manual Linear Nano-Positioner" },
            { id: "4", name: "Miniature Manual Linear Translation Stages" },
            { id: "5", name: "Manual Linear Translation Stages" },
            { id: "6", name: "  Spatial Filter" },
            { id: "7", name: "Kinematic Mount Plate" },
            { id: "8", name: "Kinematic Circular Mount" },
          ],
        },
        {
          id: "5",
          title: "Optic Elements",
          subset: [
            { id: "1", name: "Spatial Light Modulator" },
            { id: "2", name: "RGB LED Light Source" },
            { id: "3", name: "Diode Laser Source" },
          ],
        },
      ],
    },
    {
      id: "3",
      title: "Services",
      category: [{ id: "1", title: "Services" }],
    },
    {
      id: "4",
      title: "News",
    },
    {
      id: "5",
      title: "About",
    },
    {
      id: "6",
      title: "Contact",
    },
  ];

  const handleScroll = () => {
    setScrollY(Math.floor(window.scrollY));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (scrollY < 50) {
      navbarRef.current?.classList.remove("bg-[#021B00]", "py-5");
      navbarRef.current?.classList.add("bg-transparent", "py-10");
    } else if (scrollY > 50) {
      navbarRef.current?.classList.remove("bg-transparent", "py-10");
      navbarRef.current?.classList.add("bg-[#021B00]", "py-5");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div
        className={`${
          showCollapsMenu ? "fixed" : "hidden"
        } border z-30 left-0 right-0 top-0 bottom-0 m-0 h-screen bg-black/50`}
        onClick={() => setShowCollapsMenu(false)}
      ></div>
      <div className={styles.navbar} ref={navbarRef}>
        <div className={styles.navbar__content} dir="ltr">
          {/* logo */}
          <div className="text-white">Logo</div>

          {/* menu items */}
          <div className={styles.menu}>
            <ul className={styles.menu__content}>
              <Link href="/">
                <li className={styles.menu__items}>
                  <span className="font-medium"> Home </span>
                </li>
              </Link>

              <li className={styles.menu__items}>
                <Link href="/allProducts">
                  <span className="font-medium"> Products </span>
                </Link>
                <MdArrowForwardIos className={styles.arrowIcon} />
                <div className={styles.menu__subroutes}>
                  <ul>
                    <li>
                      <span className="flex items-center justify-between">
                        3D Measurement
                        <IoArrowForward className={styles.subRoutesIcon} />
                      </span>
                      <div className={styles.menu__2Subroute_content}>
                        <ul>
                          <li> Optical 3D Nano Profilometer </li>
                          <li> Optical 3D Micro Profilometer </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <span className="flex items-center justify-between ">
                        Spectrometer
                        <IoArrowForward className={styles.subRoutesIcon} />
                      </span>
                      <div className={styles.menu__2Subroute_content}>
                        <ul>
                          <li> Spectrometer </li>
                          <li> Spectrophotometer </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <span className="flex items-center justify-between ">
                        Opto Electronic
                        <IoArrowForward className={styles.subRoutesIcon} />
                      </span>
                      <div className={styles.menu__2Subroute_content}>
                        <ul>
                          <li> Spatial Light Modulator</li>
                          <li> RGB LED Light Source </li>
                          <li> Diode Laser Source </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <span className="flex items-center justify-between ">
                        Opto Mechanic
                        <IoArrowForward className={styles.subRoutesIcon} />
                      </span>
                      <div className={styles.menu__2Subroute_content}>
                        <ul>
                          <li>Motorized Translation Stage</li>
                          <li> Piezo Nano Positioner </li>
                          <li> Manual Linear Nano-Positioner </li>
                          <li>Miniature Manual Linear Translation Stages </li>
                          <li> Manual Linear Translation Stages </li>
                          <li> Spatial Filter </li>
                          <li> Kinematic Mount Plate </li>
                          <li> Kinematic Circular Mount </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <span className="flex items-center justify-between ">
                        Optic Elements
                        <IoArrowForward className={styles.subRoutesIcon} />
                      </span>
                      <div className={styles.menu__2Subroute_content}>
                        <ul>
                          <li> Precision Pinhole</li>
                          <li> Lens Collection </li>
                          <li>Optical Flat Mirrors </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={styles.menu__items}>
                <span className="font-medium"> Services </span>
                <MdArrowForwardIos className={styles.arrowIcon} />
                <div className={styles.menu__subroutes}>
                  <ul>
                    <li>
                      <span> Laboratory </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.menu__items}>
                <span className="font-medium"> News </span>
              </li>

              <li className={styles.menu__items}>
                <Link href="/about">
                  <span className="font-medium"> About </span>
                </Link>
                <MdArrowForwardIos className={styles.arrowIcon} />
                <div className={styles.menu__subroutes}>
                  <ul>
                    <li>
                      <span> About </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={styles.menu__items}>
                <Link href="/contact">
                  <span className="font-medium"> Contact </span>
                </Link>
                <MdArrowForwardIos className={styles.arrowIcon} />
                <div className={styles.menu__subroutes}>
                  <ul>
                    <li>
                      <span> Contact</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* menu-collapse */}
          <div className="lg:hidden  rounded-sm p-1 bg-[#021B00]">
            <IoMdMenu
              className="text-2xl text-white cursor-pointer"
              onClick={() => setShowCollapsMenu((prevState) => !prevState)}
            />
          </div>

          {showCollapsMenu && (
            <div className={styles.navbarCollaps}>
              <div className={styles.navbarCollaps__content}>
                {menuData?.map((menuItem) => (
                  <>
                    <NavbarItem key={menuItem.id} {...menuItem} />
                  </>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Navbar;
