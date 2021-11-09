import React from 'react'

import Layout from '../layouts/index'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <Layout>
      <SEO/>
      
      <Header />
      <Pricing />
      
      <Footer />
      
    </Layout>
  )
}

export default Home