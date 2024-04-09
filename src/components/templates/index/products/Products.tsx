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
        </div>

    </div>
  )
}

export default Products