import React, { useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.classList.remove('translate-x-full')
    }

    const closeMenu = () => {
        sideMenuRef.current.classList.add('translate-x-full')
    }

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
      <nav className='w-full fixed px-5 lg:px-8 x1:px-[8%] py-4 flex items-center justify-between z-50 '>
        <a href='#top'>
            <Image src={assets.logo} className='w-40 
            cursor-pointer mr-14' alt="" />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8
        rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
            <li><a href='#top'>About</a></li>
            <li><a href='#software'>Software Development</a></li>
            <li><a href='#graphic'>Graphic Design</a></li>
            <li><a href='#ui'>UI Design</a></li>
            <li><a href='#illustration'>Illustration</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button>
                <Image src={assets.moon_icon} alt="" className='w-6'/>
            </button>
            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4'>Contact <Image src={assets.arrow_icon} alt='arrow pointer' className='w-3'/></a>
        <button className='block md:hidden ml-3' onClick={openMenu}>
             <Image src={assets.menu_black} alt="" className='w-6'/>
        </button>
        </div>

{/* mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0
        w-64 z-50 h-screen bg-[#FEEBEB] transition duration-500'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt="" className='w-5 cursor-pointer' />
            </div>
            <li><a onClick={closeMenu} href='#top'>About</a></li>
            <li><a onClick={closeMenu} href='#software'>Software Development</a></li>
            <li><a onClick={closeMenu} href='#graphic'>Graphic Design</a></li>
            <li><a onClick={closeMenu} href='#illustration'>Illustration</a></li>
            <li><a onClick={closeMenu} href='#ui'>UI Design</a></li>
            <li><a onClick={closeMenu} href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
