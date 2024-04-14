import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner__content">
      <Image
        src="/assets/index-header.jpg"
        className="w-full h-screen object-cover object-bottom"
        width={1000}
        height={500}
        alt="banner image"
      />
      <div className={styles.textBanner__content}>
        <p className="text-base font-bold md:text-2xl"> Name Company </p>
        <p className="text-3xl text-center md:text-4xl"> Quality based on modern knowledge </p>
        <p className={styles.textBanner__desc} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui
          molestiae corporis aliquid modi excepturi dolores placeat, voluptates
          natus voluptatem autem dolorum iure, laborum eius a veniam,
          repudiandae error! Totam!
        </p>
        <Link href='/about' className={styles.banner__btn}>
          <span> more </span>
          <IoIosArrowRoundForward className="text-xl mx-2" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
