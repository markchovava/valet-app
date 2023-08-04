import { Link } from 'react-router-dom'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'


const Footer = () => {
    
  return (
    <section className='w-[100%] h-auto bg-black text-white pt-12 pb-16'>
        <div className='mx-[8rem] grid grid-cols-3 gap-4 mb-8'>
            <div className=''>
                <div className='font-semibold text-[2rem] cursor-pointer pb-3'>
                    VALET
                </div>
                <p className='italic'>Helping you with secure parking.</p>
                <div className='flex justify-between items-center'>

                </div>
            </div>
            <div className=''>
                <h2 className='text-2xl font-semibold mb-3'>External Links</h2>
                <ul className=''>
                    <Link to='/'>
                    <li className='hover:text-gray-400 font-medium transition-all hover:translate-x-2'>
                        Home
                    </li>
                    </Link>
                    <Link to='/about'>
                    <li className='hover:text-gray-400 font-medium transition-all hover:translate-x-2'>
                        About Us
                    </li>
                    </Link>
                    <Link to='/service'>
                    <li className='hover:text-gray-400 font-medium transition-all hover:translate-x-2'>
                        Our Services
                    </li>
                    </Link>
                    <Link to='/contact'>
                    <li className='hover:text-gray-400 font-medium transition-all hover:translate-x-2'>
                        Contact Us
                    </li>
                    </Link>
                </ul>
            </div>
            <div className=''>
                <h2 className='text-2xl font-semibold mb-3'>Contact Details</h2>
                <ul>
                    <li className='flex justify-start items-center gap-4 mb-2'>
                        <BsFillTelephoneFill />
                        <span className='font-medium'>+263 (0) 782 210021</span>
                    </li>
                    <li className='flex justify-start items-center gap-4 mb-2'>
                        <ImLocation />
                        <span className='font-medium'>4th 85 Avenue, Mabelreign,Harare</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className='mx-[8rem] border-t border-slate-500'>
            <div className='py-8 text-center'>
                Developed and Maintained by Freelance Designers { new Date().getFullYear() }
            </div>
        </div>
    </section>
  )
}

export default Footer