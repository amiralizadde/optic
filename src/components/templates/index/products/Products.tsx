import React from 'react'
import styles from './products.module.css'
import Image from 'next/image'

const Products = () => {
  return (
    <div className='mt-16 py-10'>
        {/* title */}
        <div>
            <p className={styles.product__title}> Products </p>
        </div>
        <div>
            <ul className={styles.products__content}>
                <li>
                    <Image src="/assets/products-pic/(1).jpg" className={styles.products__Img} width={1000} height={500} alt="img-product" />
                    <p> name product </p>
                </li>
                <li>
                   <Image src="/assets/products-pic/(8).jpg" className={styles.products__Img} width={1000} height={500} alt="img-product" />
                <p> name product </p>
                </li>
                <li>
                   <Image src="/assets/products-pic/(3).jpg" className={styles.products__Img} width={1000} height={500} alt="img-product" />
                <p> name product </p>
                </li>
                <li>
                   <Image src="/assets/products-pic/(4).jpg" className={styles.products__Img} width={1000} height={500} alt="img-product" />
                <p> name product </p>
                </li>
                <li>
                   <Image src="/assets/products-pic/(5).jpg" className={styles.products__Img} width={1000} height={500} alt="img-product" />
                <p> name product </p>
                </li>
                <li>
                   <Image src="/assets/products-pic/(6).jpg" className={styles.products__Img} width={1000} height={500} alt="img-product" />
                <p> name product </p>
                </li>
            </ul>
            <div className='flex items-center justify-center mt-16'>
                <button className='bg-lime-950 text-white px-10 py-2 hover:bg-black  transition-all duration-20'> See all </button>
            </div>
        </div>

    </div>
  )
}

export default Products