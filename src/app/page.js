"use client"

import Banner from '@/components/banner'
import Navbar from '@/components/navbar'
import RestaurantList from '@/components/restaurantList'
import { useEffect } from 'react'

export default  function Home() {

  return (
    <>
      <Navbar />
      <Banner />
      <RestaurantList />
    </>
  )
}
