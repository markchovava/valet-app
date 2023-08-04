import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import ServiceData from './../../data/ServiceData.json'
import BottomLinks from '../../components/BottomLinks'



const ViewService = () => {
    const { id } = useParams()
    const dataItem = ServiceData.find((i) => i.id === parseInt(id));

    console.log(dataItem)

  return (
    <>
        <Header />
        <section 
            style={{backgroundImage: `url(./assets/img/slides/01.jpg)`}} 
            className='relative w-[100%] h-[35vh] custom__overlayBlack bg-cover'>
            <div className='w-[100%] h-[100%] absolute z-10 pt-[5.5rem] justify-center items-end'>
                <h1 className='text-white text-center font-bold drop-shadow-xl text-[4rem]'>
                    {dataItem.title}
                </h1>
            </div>
        </section>

        <section className='w-[100%] h-auto py-8'>
            <div className='mx-[8rem]'>
                <div className='flex justify-between items-center gap-8 pt-16'>
                    <div className='w-[50%] overflow-hidden rounded-xl'>
                        <img src="./assets/img/parking/events.jpg" className='aspect-[5/3] object-cover' />
                    </div>
                    <div className='w-[50%]'>
                        <h2 className='text-[2.5rem] font-semibold mb-4'>{ dataItem.title }</h2>
                        <p className='mb-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae unde mollitia dolorem 
                            adipisci suscipit quo quasi. 
                        </p>
                        <h3 className='mb-4 font-bold text-2xl text-slate-800'>
                            ${ dataItem.price }
                        </h3>
                    </div>
                </div>    
            </div>
        </section>

        <section className='w-[100%] h-auto pt-4 pb-8 bg-gray-100'>
            <div className='mx-[8rem]'>
               <h1 className='mb-4 text-[3.5rem] font-bold'>Customer Information</h1>
                <form>
                    <div className='mb-8 flex justify-between items-center gap-4'>
                        <div className='w-[50%]'>
                            <label className='block mb-3 text-xl font-medium'>First Name:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                        <div className='w-[50%]'>
                            <label className='block mb-3 text-xl font-medium'>LastName:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                    </div>
                    <div className='mb-8 flex justify-between items-center gap-4'>
                        <div className='w-[50%]'>
                            <label className='block mb-3 text-xl font-medium'>Phone Number:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                        <div className='w-[50%]'>
                            <label className='block mb-3 text-xl font-medium'>Email:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                    </div>

                    <hr className='my-8 w-[100%] text-slate-800 bg-slate-800' />

                    <h2 className='mb-4 text-[3.5rem] font-bold'>Car Specifications.</h2>
                    <div className='mb-8 flex justify-between items-center gap-4'>
                        <div className='w-[50%]'>
                            <label className='block mb-3 text-xl font-medium'>Car Brand:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                        <div className='w-[50%]'>
                            <label className='block mb-3 text-xl font-medium'>Car Model:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                    </div>
                    <div className='mb-8 flex justify-between items-center gap-4'>
                        <div className='w-[50%]'>
                            <label className='block mb-3 text-xl font-medium'>Registration Number:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                        <div className='w-[50%]'>
                            <label className='block mb-3 text-xl font-medium'>Car Color:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                    </div>
                    <div className='mb-8'>
                        <div className='w-[100%]'>
                            <label className='block mb-3 text-xl font-medium'>Current Location of the Car:</label>
                            <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-3 py-3' />
                        </div>
                    </div>

                    
                    <div className='mb-8'>
                       <button className='w-[100%] text-white text-xl bg-slate-800 hover:bg-slate-900 transition-all rounded-lg block outline-none border border-slate-300 px-3 py-3'>Submit</button>
                    </div>
                </form> 
            </div>
        </section>
        <BottomLinks />
        <Footer />
    </>
  )
}

export default ViewService