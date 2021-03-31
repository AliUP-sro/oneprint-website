import React from 'react'

import Layout from '../layouts/index'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <Layout>
      <Header />
      <Pricing />
      
      <Footer />
      
    </Layout>
  )
}

export default Home