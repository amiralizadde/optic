"use client";
import React, { useState , useRef, useEffect } from "react";
import styles from "./navbar.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [showCollapsMenu, setShowCollapsMenu] = useState<boolean>(false);
  const [showCollapsSubMenu, setShowCollapsSubMenu] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const navbarRef = useRef<HTMLDivElement>(null)

  const handleScroll=()=>{
    setScrollY(Math.floor(window.scrollY))
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollY < 50) {
      navbarRef.current?.classList.remove('bg-black','py-5');
      navbarRef.current?.classList.add('bg-transparent','py-10');
    }else if(scrollY > 50){
      navbarRef.current?.classList.remove('bg-transparent','py-10');
      navbarRef.current?.classList.add('bg-black','py-5');
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
   

  return (
    <div className={styles.navbar} ref={navbarRef} >
      <div className={styles.navbar__content} dir="ltr">
        {/* logo */}
        <div className="text-white">Logo</div>

        {/* menu items */}
        <div className={styles.menu}>
          <ul className={styles.menu__content}>
            <Link href='/'>
              <li className={styles.menu__items}>
                <span className="font-medium"> Home </span>
              </li>
            </Link>

            <li className={styles.menu__items}>
             <Link href='/allProducts'><span className="font-medium"> Products </span></Link> 
              <MdArrowForwardIos className={styles.arrowIcon} />
              <div className={styles.menu__subroutes}>
                <ul>
                  <li>
                    <span className="flex items-center justify-between"> 3D Measurement <IoArrowForward  className={styles.subRoutesIcon} /> </span>
                    <div className={styles.menu__2Subroute_content}>
                      <ul>
                        <li> Optical 3D Nano Profilometer </li>
                        <li> Optical 3D Micro Profilometer </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span className="flex items-center justify-between "> Spectrometer <IoArrowForward  className={styles.subRoutesIcon} /> </span>
                    <div className={styles.menu__2Subroute_content}>
                      <ul>
                        <li> Spectrometer </li>
                        <li> Spectrophotometer </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span className="flex items-center justify-between ">Opto Electronic <IoArrowForward  className={styles.subRoutesIcon} /> </span>
                    <div className={styles.menu__2Subroute_content}>
                      <ul>
                        <li> Spatial Light Modulator</li>
                        <li> RGB LED Light Source </li>
                        <li> Diode Laser Source </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span className="flex items-center justify-between ">Opto Mechanic  <IoArrowForward  className={styles.subRoutesIcon} /> </span>
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
                    <span className="flex items-center justify-between "> Optic Elements   <IoArrowForward  className={styles.subRoutesIcon} /> </span>
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
            <Link href='/about'><span className="font-medium"> About </span></Link>
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
              <Link href='/contact'><span className="font-medium"> Contact </span></Link>
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
        <div className="lg:hidden">
          <IoMdMenu
            className="text-xl text-orange-500"
            onClick={() => setShowCollapsMenu((prevState) => !prevState)}
          />
        </div>

        {showCollapsMenu && (
          <div className={styles.navbar__collaps}>
            <ul className={styles.navCollaps__content}>
              <li> Home </li>
              <li className={styles.navCollaps__item}>
                <span className="flex items-center">
                  Products <MdArrowForwardIos className={styles.arrowIcon} />
                </span>
                <div className={styles.navCollaps__subroutes}>
                  <ul className={styles.navCollaps__subroutes_content}>
                    <li>
                      <label className="flex flex-col items-start">
                        <input type="checkbox" className="peer hidden " />
                        <span className="flex items-center">
                          3D Measurement
                          <MdArrowForwardIos className="text-xs" />
                        </span>

                        <div className="peer-checked:block">
                          <ul>
                            <li> Optical 3D Nano Profilometer </li>
                            <li> Optical 3D Micro Profilometer </li>
                          </ul>
                        </div>
                      </label>
                    </li>

                    <li>
                      <label className="flex flex-col items-start">
                        <input type="checkbox" className="peer hidden" />
                        <span className="flex items-center">
                          Spectrometer <MdArrowForwardIos className="text-xs" />
                        </span>
                        <div className="hidden peer-checked:block">
                          <ul>
                            <li> Spectrometer </li>
                            <li> Spectrophotometer </li>
                          </ul>
                        </div>
                      </label>
                    </li>

                    <li>
                      <label className="flex flex-col items-start">
                        <input type="checkbox" className="peer hidden" />
                        <span className="flex items-center">
                          Opto Electronic
                          <MdArrowForwardIos className="text-xs" />
                        </span>
                        <div className="hidden peer-checked:block">
                          <ul>
                            <li> Spatial Light Modulator </li>
                            <li> RGB LED Light Source </li>
                            <li> Diode Laser Source </li>
                          </ul>
                        </div>
                      </label>
                    </li>

                    <li>
                      <label className="flex flex-col items-start">
                        <input type="checkbox" className="peer hidden" />
                        <span className="flex items-center">
                          Opto Mechanic
                          <MdArrowForwardIos className="text-xs" />
                        </span>
                        <div className="hidden peer-checked:block">
                          <ul>
                            <li> Motorized Translation Stage </li>
                            <li> Piezo Nano Positioner </li>
                            <li> Manual Linear Nano-Positioner </li>
                            <li>
                              
                              Miniature Manual Linear Translation Stages
                            </li>
                            <li> Manual Linear Translation Stages </li>
                            <li> Spatial Filter </li>
                            <li> Kinematic Mount Plate </li>
                            <li> Kinematic Circular Mount </li>
                          </ul>
                        </div>
                      </label>
                    </li>

                    <li>
                      <label className="flex flex-col items-start">
                        <input type="checkbox" className="peer hidden" />
                        <span className="flex items-center">
                          Optic Elements
                          <MdArrowForwardIos className="text-xs" />
                        </span>
                        <div className="hidden peer-checked:block">
                          <ul>
                            <li> Precision Pinhole </li>
                            <li> Lens Collection </li>
                            <li> Optical Flat Mirrors </li>
                          </ul>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={styles.navCollaps__item}>
                <span className="flex items-center">
                  Services <MdArrowForwardIos className={styles.arrowIcon} />
                </span>
                <div className={styles.navCollaps__subroutes}>
                  <ul className={styles.navCollaps__subroutes_content}>
                    <li>
                      <span> Laboratory </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={styles.navCollaps__item}> News </li>
              <li className={styles.navCollaps__item}> About </li>
              <li className={styles.navCollaps__item}> Contact </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
