import React from 'react'
import Hero from '../components/Hero'
import SoundsList from '../components/SoundsList'
import Alphabets from '../components/Alphabtes'
import Footer from '../common/Footer'

const Home = () => {
  return (
      <>
          <Hero />
          <SoundsList />
          <Alphabets />
          <Footer/>
    </>
  )
}

export default Home