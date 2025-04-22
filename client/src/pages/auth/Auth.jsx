import React from 'react'
import {useNavigate} from 'react-router-dom'
import QuizCards from '../../components/card/QuizCards'
import Footer from '../../components/footer/Footer'
import Contact from '../../components/conact/Contact'

const Auth = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900 text-white">
      <header className='fixed top-0 left-0 w-full flex items-center justify-between p-6 opacity-90 bg-gray-800'>
        <h1 className='text-3xl font-black cursor-pointer tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400'>
          Web.<span>Quizz</span>
        </h1>
        <button className='bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full
         cursor-pointer hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md' onClick={()=>navigate("/login")}>Sign In</button>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-28 px-[10%]">
        <img src="./me.jpg" alt="me" className='rounded-3xl' />
        <div className="flex flex-col items-center justify-center mt-5">
        <h1 className='text-4xl md:text-5xl font-extrabold
         tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 mb-4'>Welcome!</h1>
         <p className='text-2xl font-semibold text-center'>Learn interesting knowledge with us and <span className=' tracking-tight bg-clip-text text-transparent
        bg-gradient-to-r bg-blue-700 to-indigo-700 '>achieve results</span> </p>
        <div className="mt-4 flex items-center gap-5">
          <button className='bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 text-white
          px-5 py-2 shadow-lg rounded-full cursor-pointer'>Starting Now</button>
          <button className='border-2 px-5 py-2 rounded-full cursor-pointer hover:bg-white hover:text-blue-900 transition-all duration-300'>Read More</button>
        </div>
      </div>
      </div>
      {/* cards */}
      <div className="mt-5">
        <h2 className='text-3xl font-bold text-center mt-5 mb-5'>Best Practice with us</h2>
      <QuizCards/>        
      </div>
      <div className="">
        <Contact/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Auth