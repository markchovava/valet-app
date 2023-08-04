import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainTitle from './components/MainTitle'
import MainContent from './components/MainContent'
import BottomLinks from '../../components/BottomLinks'

function AboutPage() {
  useEffect(() => {
    document.title = 'Valet | About Us';
  }, [])

  return (
    <>
      <Header />
      <MainTitle />
      <MainContent />
      <BottomLinks />
      <Footer />
    </>
  )
}

export default AboutPage