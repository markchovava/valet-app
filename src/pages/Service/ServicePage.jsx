import { useEffect } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContent from './components/MainContent';
import MainTitle from './components/MainTitle';
import BottomLinks from '../../components/BottomLinks';

const ServicePage = () => {
    useEffect(() => {
        document.title = 'Valet | Our Services';
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

export default ServicePage