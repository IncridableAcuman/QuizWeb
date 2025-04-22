import { Heart, Moon, UserCircle } from 'lucide-react'
import React, { useState } from 'react'

const MainNavbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <>
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-opacity-90 bg-gray-900 text-white">
        <h1 className='text-3xl font-bold tracking-tight bg-clip-text
        text-transparent bg-gradient-to-r from-indigo-700 via-pink-700 to-red-800 cursor-pointer'>Quiz<span>Web</span></h1>
        <div className="flex items-center gap-3">
          <a href="/" className='text-gray-300 hover:text-white transition'>Home</a>
          <a href="/about" className='text-gray-300 hover:text-white transition'>About</a>
          <a href="teachers" className='text-gray-300 hover:text-white transition'>Teachers</a>
          <a href="/students" className='text-gray-300 hover:text-white transition'>Students</a>
          <a href="/questions" className='text-gray-300 hover:text-white transition'>Questions</a>
        </div>
        <div className="flex items-center gap-3">
          <Heart/>
          <Moon className='cursor-pointer text-gray-300 hover:text-white'/>
          <UserCircle className=' relative cursor-pointer text-gray-300 hover:text-white' 
          onClick={()=>setIsOpen(!isOpen)}/>
          {isOpen && (
            <div className="absolute space-y-2 bg-gray-300 p-4 text-black rounded mt-32">
            <p className="cursor-pointer rounded px-2 w-full hover:bg-gray-200 transition">Username</p>
            <p className="cursor-pointer rounded px-2 w-full hover:bg-gray-200 transition">SignOut</p>
          </div> 
          )}
         
        </div>
    </div>
    </>
  )
}

export default MainNavbar