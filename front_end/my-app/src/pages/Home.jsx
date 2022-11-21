import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Item from'../components/Item'
import ShopOrSell from '../components/ShopOrSell'
import Footer from '../components/footer'
import Newsletter from '../components/Newsletter'



const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <ShopOrSell></ShopOrSell>
        <Newsletter></Newsletter>
        <Footer></Footer>

     </>
  )
}

export default Home