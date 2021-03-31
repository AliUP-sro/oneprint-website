import React from 'react'

import Layout from '../layouts/index'
import Header from '../components/Header'
import ShowcaseBoxes from '../components/ShowcaseBoxes'
import Footer from '../components/Footer'

import AboutPage from '../components/home/about'
import Services from '../components/home/services'
import Projects from '../components/home/projects'
import Clients from '../components/home/clients'

const Home = () => {
  return (
    <Layout>
      <Header />
      <ShowcaseBoxes />
      <AboutPage />
      <Services />
      <Projects />
      <Clients/>
      <Footer/>
    </Layout>
  )
}

export default Home