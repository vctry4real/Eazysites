import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'> All IN One PLATFORM</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'> From crafting websites that reflect your unique style to discovering and selling top-notch designs, our platform has it all.</p>
        
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 '>
                <div className='flex bg-white rounded-xl shadow-2xl py-4 px-4 my-4'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Tailor Site</h3>
                        <p className='text-lg pt-2 pb-4 '>At Eazysites, we understand that every individual and business is one of a kind. That's why we're proud to offer Tailored Websites, a service that goes beyond the ordinary to create a digital presence as unique as you are</p>
                    </div>
                </div>

                <div className='flex bg-white rounded-xl shadow-2xl py-4 px-4 my-4'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Websites Marketplace</h3>
                        <p className='text-lg pt-2 pb-4 '>Discover a curated collection of exceptional website designs tailored to various industries and aesthetics. Find the perfect design to match your vision, whether you're launching a personal blog or a business site.</p>
                    </div>
                </div>

                <div className='flex bg-white rounded-xl shadow-2xl py-4 px-4 my-4 '>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Support Resources</h3>
                        <p className='text-lg pt-2 pb-4 '>We've got your back every step of the way. Access a wealth of resources, including FAQs, user guides, and troubleshooting tips, to ensure a smooth experience on our platform.</p>
                    </div>
                </div>

                <div className='flex bg-white rounded-xl shadow-2xl py-4 px-4 my-4 '>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Designer Collaboration</h3>
                        <p className='text-lg pt-2 pb-4 '>Connect with other designers to brainstorm, share ideas, and collaborate on projects. Leverage the power of community creativity.</p>
                    </div>
                </div>

                <div className='flex bg-white rounded-xl shadow-2xl py-4 px-4 my-4 '>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Blog</h3>
                        <p className='text-lg pt-2 pb-4 '> In a world of words that captivate, inform, and engage. We're proud to offer comprehensive blog services that transform your thoughts into compelling narratives. Whether you're a business looking to connect with your audience or an individual with stories to share, our blog services are tailored to your unique needs.</p>
                    </div>
                </div>

                <div className='flex bg-white rounded-xl shadow-2xl py-4 px-4 my-4 '>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Custom Packages</h3>
                        <p className='text-lg pt-2 pb-4 '>Whether you need one blog post or a series, we offer flexible packages that cater to your specific requirements.</p>
                    </div>
                </div>

                <div className='flex bg-white rounded-xl shadow-2xl py-4 px-4 my-4 '>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Secure & Seamless Transaction</h3>
                        <p className='text-lg pt-2 pb-4 '>Enjoy peace of mind with our secure payment processing system. Whether you're purchasing a design or earning from your sales, transactions are safe and seamless.</p>
                    </div>
                </div>

                <div className='flex bg-white rounded-xl shadow-2xl py-4 px-4 my-4'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Updates & Enhancements</h3>
                        <p className='text-lg pt-2 pb-4 '>We're committed to continuous improvement. Our platform is regularly updated with new features, improvements, and optimizations based on user feedback and industry trends.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AllInOne