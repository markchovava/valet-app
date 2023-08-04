import { useEffect } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import CallToAction from "./components/CallToAction"
import MainSlider from "./components/MainSlider"
import PackageList from "./components/PackageList"
import ServiceType from "./components/ServiceType"
import BottomLinks from "../../components/BottomLinks"


function HomePage() { 
  useEffect(() => {
    document.title = 'Valet | Home';
  }, [])

  return (
    <>
      <Header />
      <MainSlider />
      <CallToAction />
      <PackageList />
      <ServiceType />
      <BottomLinks />
      <Footer />
    </>
  )
}

export default HomePage