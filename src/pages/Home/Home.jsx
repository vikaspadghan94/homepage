// import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Plans from '../../components/Plans/Plans'
import Restarents from '../../components/Restarents/Restarents'
import ChoosePlan from '../../components/ChoosePlan/ChoosePlan'
import Review from '../../components/Review/Review'
import Customer from '../../components/Customer/Customer'
import Download from '../../components/Download/Download'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Plans />
      <Restarents />
      <ChoosePlan />
      <Review />
      <Customer />
      <Download />
      <Footer />
    </div>
  )
}

export default Home
