import React from 'react'
import {AiOutlineSearch, AiOutlineClose, AiOutlineWallet} from 'react-icons/ai'
import {TiMicrophone} from 'react-icons/ti'
import {BsCameraVideo, BsYoutube, BsBell} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoAppsSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 top-0 z-50">
        <div className="flex gap-8 items-center text-2xl">
            <GiHamburgerMenu/>
            <Link to='/'>
                <div className="flex gap-1 items-center justify-center">
                    <BsYoutube className='text-xl text-red-600'/>
                    <span className='text-xl font-medium'>Youtube</span>
                </div>
            </Link>
        </div>
        <div className="flex flex-center justify-center gap-5">
            <form className='flex bg-zinc-900 items-center h-10 pr-0 px-4'>
                <div className="flex gap-4 items-center pr-5">
                    <div>
                        <AiOutlineSearch className='text-xl'/>
                    </div>
                    <input 
                        type="text" 
                        className="w-96 bg-zinc-900 focus:outline-none border-none" 
                    />
                    <AiOutlineClose className='text-2xl cursor-pointer'/>
                </div>
                <button className='h-10 w-16 flex items-center justify center bg-zinc-800'>
                    <AiOutlineSearch className='text-2xl'/>
                </button>
            </form>
            <div className="text-xl p-3 bg-zinc-900 rounded-full">
                <TiMicrophone />
            </div>
        </div>
        <div className="flex gap-5 items-center text-xl">
            <BsCameraVideo />
            <IoAppsSharp />
            <div className="relative">
                <BsBell/>
                <span className="absolute bottom-2 text-xs bg-red-500 rounded-full px-1">
                    9+
                </span>
            </div>
            <img src="https://unsplash.com/photos/K9NFc6MM-64" alt="logo" className='w-9 h-9 rounded-full'/>
        </div>
    </div>
  )
}

export default Navbar
