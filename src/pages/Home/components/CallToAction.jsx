import React from 'react'

function CallToAction() {
  return (
    <section className='bg__gradientRed w-[100wv] xl:h-[40vh] lg:h-[50vh] h-[70vh] flex flex-col items-start justify-center'>
        <div className="mx-[8rem] text-white">
        <h1 className="font-bold lg:text-[2.5rem] text-[2rem]">
          Lorem ipsum dolor sit amet consectetur. 
        </h1>
        <p className="text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, autem?</p>
        <button className="px-4 py-3 text-lg rounded-full transition bg-slate-800 hover:bg-black">
            Click here
        </button>
        </div>
    </section>
  )
}

export default CallToAction