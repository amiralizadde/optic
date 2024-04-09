import About from '@/components/templates/about/About'
import BannerAbout from '@/components/templates/about/BannerAbout'
import Users from '@/components/templates/about/Users'
import React from 'react'

const page = () => {
  return (
    <div>
      <BannerAbout />
      <Users />
    </div>
  )
}

export default page