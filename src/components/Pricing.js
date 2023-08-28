import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'
const pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
      
      <div className='max-w-[1240px] mx-auto py-12'>
        
        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase '>Pricing </h2>
          <h3 className='text-5xl font-bold py-8 text-white'>The Right Price For Your Website</h3>
          <p className='text-3xl'>lkakdlkjlk lkalkdlk lka;lkjkdk klakdhdl l;alkjdkldk ;lakjd;ldkdl lkalkdlk kalkdkdj l;a lka;kdjdjdl;kldkjdl; kakdjkljak lalkdkljdk lkakjdkj kjdj klalkjdka </p>
        </div>

        <div className='grid md:grid-cols-2'>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>40$<span className='text-xl text-slate-500 flex flex-col justify-end'>/Month</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>takdkkd kalkdkdja lk;akdjk l;kdkajhdh</p>
            <div className='text-2xl'>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>99$<span className='text-xl text-slate-500 flex flex-col justify-end'>/Month</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>takdkkd kalkdkdja lk;akdjk l;kdkajhdh</p>
            <div className='text-2xl'>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>gaetk lakjd la;kl kd </p>
              <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
} 

export default pricing