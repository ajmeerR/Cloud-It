import React from 'react'
import { CheckIcon, } from '@heroicons/react/outline'

    import {
        CloudUploadIcon,
        BookOpenIcon,
        AcademicCapIcon,
        DatabaseIcon,
        CubeTransparentIcon,
        CloudIcon,
        CodeIcon,
        PaperAirplaneIcon,
        ChatIcon,
        EyeIcon,
        ServerIcon,
        ChipIcon,
        DesktopComputerIcon,
        FingerPrintIcon,
        SupportIcon,
    } from '@heroicons/react/solid';

const Cloud = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <CloudIcon className='w-8 text-indigo-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>Cloud</h3>
                    <p className='pt-2 pb-4 text-gray-700'>The power of cloud computing is the simplicity of shared hosting. We Provide Consulation Services, Cloud migration and modernization.</p>
                </div>
            </div>
        </div>
    )
}

const Robotics = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <PaperAirplaneIcon className='w-8 text-indigo-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>Robotics</h3>
                    <p className='pt-2 pb-4 text-gray-700'>Robotics involves design, construction, operation, and use of robots. We enable scholars to get trained on latest Trends & Technology.</p>
                </div>
            </div>
        </div>
    )
}

const ManagedServices = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <SupportIcon className='w-8 text-indigo-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>Managed Services</h3>
                    <p className='pt-2 pb-4 text-gray-700'>Cost Effective but Power Model of business development & Continuity. We team of IT specialists who work exclusively for business needs.</p>
                </div>
            </div>
        </div>
    )
}

const BigData = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <DatabaseIcon className='w-8 text-indigo-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>BigData</h3>
                    <p className='pt-2 pb-4 text-gray-700'>Data & Visualization are key now. Our big data consulting and engineering service experts will help you handle them at ease.</p>
                </div>
            </div>
        </div>
    )
}

const IOT = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <ChipIcon className='w-8 text-indigo-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>IOT</h3>
                    <p className='pt-2 pb-4 text-gray-700'>To create frictionless communications across different system by Analyzing it's Input/ Output.</p>
                </div>
            </div>
        </div>
    )
}


const Development = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <CodeIcon className='w-8 text-indigo-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>Development</h3>
                    <p className='pt-2 pb-4 text-gray-700'>
                        <li>IoT, Application Support</li>  
                        <li>Web and Mobile </li>
                        <li>Software Development</li>
                        <li>Animated App & Game</li>
                        <li>AR/VR</li>
                    </p>
                </div>
            </div>
        </div>
    )
}


const ChatOps = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <ChatIcon className='w-8 text-indigo-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>ChatOps</h3>
                    <p className='pt-2 pb-4 text-gray-700'>Our AI/ML Experts will helps to automate IT operations processes, including event correlation, anomaly detection and causality determination.</p>
                </div>
            </div>
        </div>
    )
}

const Security = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <CheckIcon className='w-8 text-green-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>Notification</h3>
                    <p className='pt-2 pb-4 text-gray-700'>New, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

const Acadamy = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <AcademicCapIcon className='w-8 text-indigo-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>Acadamy</h3>
                    <p className='pt-2 pb-4 text-gray-700'>
                        <li>NEET/JEE</li>  
                        <li>Tution Point [Class 9-12] (CBSE/ISE/Matric) </li>
                        <li>Hindi [All Classes]</li>
                        <li>K-12</li>
                    </p>

                </div>
            </div>
        </div>
    )
}

export  { Cloud , ManagedServices, Robotics, Acadamy, IOT, BigData, Development, ChatOps }