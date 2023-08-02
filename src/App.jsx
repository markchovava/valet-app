import { Route, Routes } from 'react-router-dom'
/* --------------------- PAGES --------------------- */
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'


function App() {

  return (
    <>
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
       </Routes>
    </>
  )
}

export default App
