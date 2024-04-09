import React from 'react'
import styles from '../../../styles/about/bannerAbout.module.css'
import Image from 'next/image'

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
          <button> Contact Us </button>
        </div>


        {/* image banner content */}
        <div>
          <Image src='/assets/kindpng_1019906 2.png' width={1000} height={500} alt='image banner about'/>
        </div>
       </div>

    </div>

  )
}

export default BannerAbout