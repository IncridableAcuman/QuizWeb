import { Code } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='fixed top-0 left-0 w-full flex items-center justify-between p-6 opacity-90 bg-gray-800'>
        <h1 className='text-3xl font-black cursor-pointer tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400'>
          Web.<span>Quizz</span>
        </h1>
        <button className='bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full
         cursor-pointer hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md flex items-center gap-2'>
          <p>Web</p>
          <Code/>
         </button>
    </header>
    </>
  )
}

export default Navbar