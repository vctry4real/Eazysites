import React from 'react'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'
import siteimage from '../assets/siteimage.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 '>
          <p className='text-2xl'> Eazysites – Where Websites Come to Life!</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Web Development</h1>
          <p className='text 2xl'>Discover, Create, and Showcase Stunning Websites</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'> Get Started </button>
        </div>
        <div>
          <img className='w-full' src={siteimage} alt='/' />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p>Website Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-400'><CloudUploadIcon  className='h-6 text-indigo-600' />Blog</p>
            <p className='flex px-4 py-2 text-slate-400'><DatabaseIcon className='h-6 text-indigo-600'/>Tailor sites</p>
            <p className='flex px-4 py-2 text-slate-400'><ServerIcon className='h-6 text-indigo-600'/>website marketing</p>
            <p className='flex px-4 py-2 text-slate-400'><PaperAirplaneIcon className='h-6 text-indigo-600'/>Website Hosting</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero