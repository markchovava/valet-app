import React from 'react'
import { Link } from 'react-router-dom'


const SingleItem = ( {title, price, id} ) => {
  return (
    <>
        {/* -------------------------------- */}
        <div className='flex justify-between items-center gap-8 py-16'>
                <div className='w-[50%] overflow-hidden rounded-xl'>
                    <img src="./assets/img/parking/events.jpg" className='aspect-[5/3] object-cover' />
                </div>
                <div className='w-[50%]'>
                    <h2 className='text-[2.5rem] font-semibold mb-4'>{ title }</h2>
                    <p className='mb-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde mollitia dolorem 
                        adipisci suscipit quo quasi. 
                    </p>
                    <h3 className='mb-4 font-bold text-2xl text-slate-800'>
                        ${ price }
                    </h3>
                    <Link to={`/service/${id}`}>
                        <button className="text-white px-4 py-3 text-lg rounded-full transition bg-slate-800 hover:bg-black">
                            Click here
                        </button>   
                    </Link> 
                </div>
            </div>
    </>
  )
}

export default SingleItem