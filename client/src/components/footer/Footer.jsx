import React from 'react'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'
const Footer = () => {
  return (
    <>
     <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Web.Quizz
          </h1>
          <p className="text-sm mt-2 text-gray-400">
            Challenge yourself, grow your knowledge.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Explore</h2>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#"><Facebook className="w-5 h-5 hover:text-blue-500 transition" /></a>
          <a href="#"><Twitter className="w-5 h-5 hover:text-sky-400 transition" /></a>
          <a href="#"><Instagram className="w-5 h-5 hover:text-pink-400 transition" /></a>
          <a href="#"><Github className="w-5 h-5 hover:text-gray-300 transition" /></a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Web.Quizz. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer