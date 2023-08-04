import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { MainContextState } from '../contexts/MainContextProvider'

function Header() {
    const {isHamburger, setIsHamburger} = MainContextState()

  return (
    <>
        <section className='w-[100%] bg-black h-auto flex items-center justify-center'>
            <div className='container  text-white py-4 px-3 md:px-0 hidden md:flex items-center justify-between'>
                <div id='header-left' className='flex items-center justify-between gap-3'>
                    <div id='header-left-logo' className='px-2'>
                        <Link to='/'>
                            <div className='font-semibold text-lg cursor-pointer'>
                                VALET
                            </div>
                        </Link>
                    </div>
                    <div id='header-left-nav'>
                        <ul className='flex items-center justify-between gap-2'>
                            <Link to='/'>
                                <li className='nav__item'>
                                    Home
                                </li>
                            </Link>
                            <Link to='/about'>
                                <li className='nav__item'>
                                About Us
                                </li>
                            </Link>
                            <Link to='/service'>
                                <li className='nav__item'>
                                    Our Services
                                </li>
                            </Link>
                            <Link to='/contact'>
                                <li className='nav__item'>
                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div id='header-right' className='p-2 flex items-center justify-between gap-1'>
                    <Link to='/login'>
                        <span className='px-3 py-2 rounded-full transition hover:text-slate-200'>
                            Login
                        </span>
                    </Link>
                    <Link to='/register'>
                    <span className='px-3 py-2 rounded-full transition bg-slate-800 border border-slate-800 hover:border-slate-300'>
                        Register
                    </span>
                    </Link>
                </div>
            </div>
            <div className='container text-white py-3 px-4 md:px-0 md:hidden'>
                <div className='w-[100%]'>
                    <div className='mx-auto w-[95%] py-4 flex items-center justify-between'>
                        <div id='responsive-header-left-logo' className=''>
                            <Link to='/'>
                                <div className='font-semibold text-lg cursor-pointer'>
                                    VALET
                                </div>
                            </Link>
                        </div>
                        <div 
                            className='text-slate-400 border border-slate-400 p-1 rounded cursor-pointer'
                            onClick={() => setIsHamburger(!isHamburger)}>
                            <GiHamburgerMenu className='text-lg' />
                        </div>
                    </div>
                </div>
                { isHamburger == true ? 
                    <div className=''>
                        <ul className='my-4 py-2 border-y border-slate-700'>
                            <Link to='/'>
                                <li className='responsive__navItem'>
                                    Home
                                </li>
                            </Link>
                            <Link to='/about'>
                                <li className='responsive__navItem'>
                                    About Us
                                </li>
                            </Link>
                            <Link to='/service'>
                                <li className='nav__item'>
                                    Our Services
                                </li>
                            </Link>
                            <Link to='/contact'>
                                <li className='responsive__navItem'>
                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                        <div className='py-2 flex justify-center gap-2'>
                        <Link to='/contact'>
                            <span className='px-3 py-2 rounded-full transition hover:text-slate-200'>
                                Login
                            </span>
                        </Link>
                        <Link to='/contact'>
                            <span className='px-3 py-2 rounded-full transition bg-slate-800 border border-slate-800 hover:border-slate-300'>
                                Register
                            </span>
                        </Link>
                        </div>

                    </div>
                : '' }
               
            </div>
        </section>
    </>
  )
}

export default Header