import React from 'react'
import styles from '../../../styles/about/bannerAbout.module.css'
import Image from 'next/image'
import Link from 'next/link'

const BannerAbout = () => {

  return (

    <div>
      
       <div className={styles.banner__content}>
        {/* text banner content */}
        <div className={styles.bannerText__content}>
          <p>we are</p>
          <p>CREATIVE</p>
          <p>AGENCY</p>
          <p>Have an <span className='font-bold'>idea</span> or <span className='font-bold mx-1'>Project</span>? </p>
          <Link href='/contact'><button> Contact Us</button> </Link>
        </div>


        {/* image banner content */}
        <div className='hidden lg:block h-full w-full  '>
          <Image src='/assets/deputy.png' width={1000} height={500} className={styles.banner__img} alt='image banner about'/>
        </div>
       </div>

    </div>

  )
}

export default BannerAbout