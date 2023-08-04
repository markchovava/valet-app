import React from 'react'
import Header from '../../components/Header'
import BottomLinks from '../../components/BottomLinks'
import Footer from '../../components/Footer'



const LoginPage = () => {
  return (
    <>
      <Header />
      <section className='w-[100%] h-auto'>
        <div 
            style={{backgroundImage: `url(./assets/img/slides/03.jpg)`}} 
            className='relative w-[100%] h-[35vh] custom__overlayBlack bg-cover'>
            <div className='w-[100%] h-[100%] absolute z-10 pt-[5.5rem] justify-center items-end'>
                <h1 className='text-white text-center font-bold drop-shadow-xl text-[4rem]'>
                    Login
                </h1>
            </div>
        </div>
        <div className='lg:mx-[8rem] mx-[4rem] pt-8 pb-12 flex justify-center items-center'>
          <form className='w-[80%] p-4'>
            <div className='mb-6'>
              <h1 className='text-[3rem] font-bold'>Login Form</h1>
            </div>
            <div className='mb-6'>
              <div className='mb-2 text-md font-semibold'>Username:</div>
              <input type='text' className='w-[100%] outline-none border rounded-lg border-slate-300 px-3 py-3' />
            </div>
           
            <div className='mb-6'>
              <div className='mb-2 text-md font-semibold'>Password:</div>
              <input type='password' className='w-[100%] outline-none border rounded-lg border-slate-300 px-3 py-3' />
            </div>
           
            <div className='mt-4 mb-6'>
              <button type='submit' className='w-[100%] transition-all text-white font-medium bg-slate-800 hover:bg-black rounded-lg border-slate-300 px-3 py-4'>
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
      <BottomLinks />
      <Footer />
    </>
  )
}

export default LoginPage