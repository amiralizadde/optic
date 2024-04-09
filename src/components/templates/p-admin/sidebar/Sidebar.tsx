import React from 'react'
import styles from '../../../../styles/p-admin/sidebar.module.css'
import Link from 'next/link'

const Sidebar = () => {
  return (
   <aside>
    <div className='h-screen bg-blue-50'>
      <ul className='p-10 flex items-start flex-col justify-start child:mt-10 child:text-xl child:font-medium child:cursor-pointer'>
        <Link href='/p-admin' ><li> products </li></Link> 
        <Link href='/p-admin/articles'><li> articles </li></Link>
        <Link href='/p-admin/news'><li> news </li></Link>
      </ul>
    </div>
   </aside>
  )
}

export default Sidebar