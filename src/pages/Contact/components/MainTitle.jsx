import React from 'react'

const MainTitle = () => {
  return (
    <section 
        style={{backgroundImage: `url(./assets/img/slides/03.jpg)`}} 
        className='relative w-[100%] h-[35vh] custom__overlayBlack bg-cover'>
        <div className='w-[100%] h-[100%] absolute z-10 pt-[5.5rem] justify-center'>
            <h1 className='text-white text-center font-bold drop-shadow-xl text-[4rem]'>
                Contact Us
            </h1>
        </div>
    </section>
  )
}

export default MainTitle