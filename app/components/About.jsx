import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
    return (
        // <div id='about' className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col 
        // items-center justify-center gap-4'>
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 bg-box'>
            <div className='flex  w-full flex-col lg:flex-row items-center gap-8 my-12'>
                <div className='w-64 sm:w-80 aspect-square sm:aspect-auto rounded-3xl overflow-hidden'>
  <Image
    src={assets.about_image}
    alt='user'
    className='w-full h-full object-cover rounded-3xl'
  />
</div>
                <div className='flex-1'>
                    <h2 className='max-w-2x1 hidden sm:block'>
                        Hello! 
                    </h2>
                    <p className='mb-4 max-w-2x1 mt-4'>
                        <span className='sm:hidden'>Hello! </span><span>I'm Frankie, a recent Software Engineering bootcamp graduate with a strong foundation in full-stack
                        development. With 7+ years as a Designer, I bring expertise in UI design,
                        website management, and user-focused problem-solving.</span>
                    </p>
                    <div className="flex gap-4 mb-4">
                        <a href="/francesca-pike-design.pdf" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">
                            Design CV
                        </a>
                        <a href="/francesca-pike-software-development.pdf" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer">
                            Engineering CV
                        </a>
                    </div>
                    <ul className='flex items-center gap-3 sm:gap-5 my-6'>
                        {toolsData.map((tool, index) => (
                            <li key={index}>
                                <Image src={tool} alt='Tool' className='w-9 sm:w-7 hover:-translate-y-1 duration-500' />
                            </li>
                        ))}
                    </ul>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x1'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='bg-white rounded-xl p-5 
                    cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                                key={index}>
                                    <div className='flex gap-2 pb-2'><Image src={icon} alt={title} className='w-5 h-5'/>
                                <p className='font-semibold text-gray-800'>{title}</p></div>
                                
                                <p>{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
