import Banner from '@/components/banner'
import Navbar from '@/components/navbar'
import RestaurantList from '@/components/restaurantList'

export default  function Home() {
  
  return (
    <>
      <Navbar />
      <Banner />
      <RestaurantList />
    </>
  )
}
