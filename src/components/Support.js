import React from 'react'
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline'
import { ChipIcon,SupportIcon } from '@heroicons/react/solid'
import service from "../assets/service.jpg"

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>  
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
          <img className='w-full h-full object-cover mix-blend-overlay' src={service} alt='/'/>
        </div>
        
        <div className='max-w-[1240px] mx-auto text-white relative'>
          
          <div  className='px-4 py-12 '>
            <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
            <h3 className='text-5xl font-bold py-6 text-center'>Our team are here for you </h3>
            <p className='py-4 text-3xl text-slate-300 text-center'>We're here to assist you in every step of your journey, ensuring that you have a seamless and enjoyable experience using our platform.  </p>
          </div> 

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
            <div className='bg-white rounded-xl shadow-2xl'>
              <div className='p-8'>
                <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h3 className='text-2xl my-6 font-bold'>User Guides</h3>
                <p className='text-gray-600 text-xl'>Explore our comprehensive user guides to make the most of your experience on Eazysites. These step-by-step tutorials will walk you through various aspects of the platform, from creating websites to uploading and selling designs.  </p>
              </div>
              <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-2xl'>
              <div className='p-8'>
                <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h3 className='text-2xl my-6 font-bold'>Technical support</h3>
                <p className='text-gray-600 text-xl'>Encountering a technical issue? Our troubleshooting section provides solutions to common problems you might face while using Eazysites. From browser compatibility to design display issues, we've got you covered. </p>
              </div>
              <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-2xl'>
              <div className='p-8'>
                <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                <h3 className='text-2xl my-6 font-bold'>Feedback and Suggestions</h3>
                <p className='text-gray-600 text-xl'>We value your feedback! If you have suggestions for improving our platform, adding new features, or enhancing the user experience, please don't hesitate to let us know. Your input plays a crucial role in shaping the future of Eazysites.</p>
              </div>
              <div className='bg-slate-100 pl-8 py-4'>
                <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Support