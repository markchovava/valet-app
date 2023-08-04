import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BottomLinks from '../../components/BottomLinks';

function ContactPage() {
  useEffect(() => {
    document.title = 'Valet | Contact Us';
  }, [])

  return (
    <>
      <Header />
      <div>ContactPage</div>
      <BottomLinks />
      <Footer />
    </>
  )
}

export default ContactPage