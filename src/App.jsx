import { Route, Routes } from 'react-router-dom'
/* --------------------- PAGES --------------------- */
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'
import ServicePage from './pages/Service/ServicePage'
import ViewService from './pages/Service/ViewService'


function App() {

  return (
    <>
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/service/:id' element={<ViewService />} />
       </Routes>
    </>
  )
}

export default App
