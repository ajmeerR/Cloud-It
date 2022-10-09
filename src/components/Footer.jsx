import React from 'react'
import FooterBlock from './FooterBlock';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import {FaFacebook, FaTwitter, FaInstagram, FaGithub, FaTwitch} from 'react-icons/fa';

const Footer = () => {
  return (
    <div name='footer' className='w-full px-4 py-8 mt-24 text-gray-300 bg-gray-900'>
        <div className='grid max-w-6xl grid-cols-2 gap-4 py-8 mx-auto border-b-2 border-gray-600 md:grid-cols-3'>
        
            <div className="info-map ">
               Tarcin Robotic LLP,<br />
               176, E 6th Street, KK Nagar,<br />
               Madurai, TamilNadu <br />
               contact@tarcinrobotic.in<br />
               +91 7010 86 9176<br />
            </div>
        </div>
        <div className='grid justify-between max-w-6xl py-4 mx-auto text-indigo-500 sm:flex'>
            <div>
                <p>2022© Tarcin Robotic, LLP. All rights reserved</p>
            </div>

            <div className='flex my-4 sm:my-0'>
                <a href="https://www.facebook.com/tarcinrobotic"> <FaFacebook className='mx-2 cursor-pointer hover:text-indigo-600' size={30} /> </a>
                <a href="https://twitter.com/tarcinrobotic"> <FaTwitter className='mx-2 cursor-pointer hover:text-indigo-600' size={30} />    </a>
                <a href="https://www.instagram.com/tarcinrobotic"> <FaInstagram className='mx-2 cursor-pointer hover:text-indigo-600' size={30} /> </a>
                <a href="https://github.com/tarcinrobotic"> <FaGithub className='mx-2 cursor-pointer hover:text-indigo-600' size={30} /> </a>
                <a href="https://www.twitch.tv/tarcinrobotic"> <FaTwitch className='mx-2 cursor-pointer hover:text-indigo-600' size={30} /> </a>
            </div>
        </div>
    </div>
  )
}

export default Footer