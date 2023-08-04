import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BottomLinks from '../../components/BottomLinks';
import MainTitle from './components/MainTitle';
import MainContent from './components/MainContent';

function ContactPage() {
  useEffect(() => {
    document.title = 'Valet | Contact Us';
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

export default ContactPage