import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import { Cloud, ManagedServices, Robotics, Acadamy, IOT, BigData, Development, ChatOps } from './Notification'

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
        <div className='max-w-6xl px-4 mx-auto'>
           <h1 className='pt-8 text-4xl text-center text-NightBlue'>PLATFORMS</h1>
            <h2 className='text-4xl font-bold text-center text-gray-800 '>All-In-One Platform</h2>
          
            <div className='grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4'>
                    <Cloud />
                    <Robotics />
                    <Acadamy />
                    <IOT />
                    <BigData />
                    <Development />
                    <ChatOps />
                    <ManagedServices />
            </div>
        </div>
    </div>
  )
}

export default AllInOne