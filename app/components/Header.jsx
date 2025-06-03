
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='relative w-full min-h-[100dvh] md:h-[650px] flex flex-col justify-center px-4'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src={assets.portfolio_background}
          alt='Portfolio Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Content */}
      <div className='w-full px-[12%] mt-8'>
        {/* Name and Chevrons */}
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-white leading-tight space-y-0'>
          <div className='flex items-center gap-4 mb-2'>
            <span className='font-bold'>Frankie Pike</span>
            <span className='inline font-light text-stroke'>›››</span>
          </div>
          <div>
            Software <span className='font-light text-stroke'>development</span> &
          </div>
          <div>
            <span className='font-light italic'>Graphic</span> and <span className='font-light italic'>UI</span> <span>Design.</span>
          </div>
        </h1>

        <div className='flex flex-wrap gap-4 mt-8'>
          <a
            href="#contact"
            className='flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:bg-opacity-50 rounded-full transition-all duration-300 text-sm font-medium'
          >
            Work with me
          </a>
          <a
            href="https://www.linkedin.com/in/frankie-pike-198253198"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:bg-opacity-50 rounded-full transition-all duration-300 text-sm font-medium'
          >
            Connect with me
            <Image
              src={assets.arrow_white}
              alt="External link"
              width={16}
              height={16}
              className='opacity-70'
            />
          </a>
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <a href="#about">
          <Image
            src={assets.arrow_down}
            alt="Scroll Down"
            width={32}
            height={32}
            className="animate-bounce cursor-pointer"
          />
        </a>
      </div>
      
    </div>
  )
}

export default Header