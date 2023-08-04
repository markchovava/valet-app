import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { MdEmail  } from 'react-icons/md'

const MainContent = () => {
  return (
    <section className='w-[100%] h-auto'>
        <div className='mx-[8rem] pt-24 pb-16 lg:flex lg:justify-between gap-4'>
            <div className='w-50% flex-1 text-white bg-slate-800 p-4'>
                <h1 className='mb-8 text-[3.5rem] font-bold'>Contact Details</h1>
                <div>
                    <div className='ml-[1.5rem] mb-4 flex justify-start items-center gap-4 '>
                        <div className='rounded-full p-2 border border-slate-50'>
                            <BsFillTelephoneFill className='' />
                        </div>
                        <div>+263 (0) 782 210021</div>
                    </div>
                    <div className='ml-[1.5rem] mb-4 flex justify-start items-center gap-4 '>
                        <div className='rounded-full p-2 border border-slate-50'>
                            <ImLocation className='' />
                        </div>
                        <div>4th 85 Avenue, Mabelreign, Harare</div>
                    </div>
                    <div className='ml-[1.5rem] mb-4 flex justify-start items-center gap-4 '>
                        <div className='rounded-full p-2 border border-slate-50'>
                            <MdEmail  className='' />
                        </div>
                        <div>admin@valet.co.zw</div>
                    </div>
                </div>
            </div>
            <div className='w-50% flex-1 p-4'>
                <h1 className='mb-4 text-[3.5rem] font-bold'>Write to us.</h1>
                <form>
                    <div className='mb-8'>
                        <label className='block mb-3 text-xl font-medium'>Name:</label>
                        <input type='text' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-2 py-3' />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-3 text-xl font-medium'>Email:</label>
                        <input type='email' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-2 py-3' />
                    </div>
                    <div className='mb-8'>
                        <label className='block mb-3 text-xl font-medium'>Message:</label>
                        <textarea type='email' rows='3' className='w-[100%] rounded-lg block outline-none border border-slate-300 px-2 py-3'></textarea>
                    </div>
                    <div className='mb-8'>
                       <button className='w-[100%] text-white text-xl bg-slate-800 hover:bg-slate-900 transition-all rounded-lg block outline-none border border-slate-300 px-3 py-3'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default MainContent