import BannerProducts from "@/components/templates/products/banner/BannerProducts";
import React from "react";
import styles from "../../styles/allproducts.module.css";
import Image from "next/image";

const AllProducts = () => {
  return (
    <div>
      {/* <BannerProducts /> */}
      <div className={styles.banner__allProducts}>
        <p className="text-3xl font-medium text-gray-800"> All Products </p>
      </div>

      {/* body all products */}
      <main>
        <div className="lg:px-28 py-10">
          <ul className={styles.allproducts__content}>
            <li>
              <div className="flex flex-col items-center justify-center">
                <div className="rounded-lg overflow-hidden">
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div className="max-w-64">
                  <p className="border">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div  className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <Image src='/assets/index-header.jpg' width={1000} height={500} className={styles.img__products} alt="image products"/>
                </div>
                <div className="">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores dolore iusto quasi?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AllProducts;
