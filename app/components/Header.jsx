
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='relative w-full h-[500px] flex flex-col justify-center px-4'>
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
      <div className='w-full px-[12%]'>
        {/* Name and Chevrons */}
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-white leading-tight space-y-0'>
          <div className='flex items-center gap-4 mb-2'>
            <span className='font-bold'>Frankie Pike</span>
            <span className='hidden sm:inline font-light text-stroke'>›››</span>
          </div>
          <div>
            Software <span className='font-light text-stroke'>development</span> &
          </div>
          <div>
            <span className='font-light italic'>Graphic</span> and <span className='font-light italic'>UI</span> <span>Design.</span>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Header