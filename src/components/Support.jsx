import React from 'react'

import { CubeTransparentIcon, ArrowSmRightIcon, AtSymbolIcon } from '@heroicons/react/outline'
import { PhoneIcon, ChipIcon, SupportIcon, AcademicCapIcon } from '@heroicons/react/solid'

import SupportImg from '../assets/support.jpeg'

const Support = () => {
    return (
        <div name='support' className='w-full mt-24 '>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='object-cover w-full h-full mix-blend-overlay' src={SupportImg} alt="Support" />
            </div>

            <div className='relative max-w-6xl mx-auto text-white '>
                <div className='px-4 py-12 text-center'>
                    <h1 className='pt-8 text-3xl text-gray-300'>SUPPORT</h1>
                    <h1 className='py-4 text-5xl font-bold'>Finding the right team</h1>
            </div>

                <div className='grid px-4 pt-12 text-black sm:pt-20 lg:grid-cols-3 gap-x-8 gap-y-16'>
                    <div className='duration-300 border border-indigo-400 shadow-2xl bg-indigo-50 shadow-indigo-200 rounded-xl hover:scale-105'>
                        <div className='p-8'>
                            <CubeTransparentIcon className='w-16 p-3 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                            <h3 className='py-4 text-2xl font-bold text-gray-700'>Product</h3>
                            <p className='text-gray-600'>Innovation Space for Creative Ideas & Converting Ideas into Product. We aim to shorten the system's development life cycle and provide continuous delivery with high software quality. </p>
                        </div>
                        <div className='bg-indigo-100 cursor-pointer rounded-b-xl'>
                            <p className='flex px-6 py-2 text-indigo-700'>Contact Us <PhoneIcon className='w-6' /> +91 98846 75586</p>
                        </div>
                    </div>
                    
                    <div className='duration-300 border border-indigo-400 shadow-2xl bg-indigo-50 shadow-indigo-200 rounded-xl hover:scale-105'>
                        <div className='p-8'>
                            <SupportIcon className='w-16 p-3 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                            <h3 className='py-4 text-2xl font-bold text-gray-700'>Services</h3>
                            <p className='text-gray-600'>Recent innovations have focused on automating customer service systems but the human element is, in some cases, indispensable. Our Service Team helps Personalize every experience. </p>
                        </div>
                        <div className='bg-indigo-100 cursor-pointer rounded-b-xl'>
                            <p className='flex px-6 py-2 text-indigo-700'>Contact Us <PhoneIcon className='w-6' />+91 7010869176</p>
                        </div>
                    </div>

                    <div className='duration-300 border border-indigo-400 shadow-2xl bg-indigo-50 shadow-indigo-200 rounded-xl hover:scale-105'>
                        <div className='p-8'>
                            <AcademicCapIcon className='w-16 p-3 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                            <h3 className='py-4 text-2xl font-bold text-gray-700'>Academy</h3>
                            <p className='text-gray-600'>Education is one thing no one can take away from you. We Aim to Train through industry specific research thereby creating a new generation of talent pool. </p>
                        </div>
                        <div className='bg-indigo-100 cursor-pointer rounded-b-xl'>
                            <p className='flex px-6 py-2 text-indigo-700'>Contact Us <PhoneIcon className='w-6' />+91 8825 77 4147</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support