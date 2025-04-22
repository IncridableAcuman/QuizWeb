import React from 'react'
import QuizCards from '../../components/card/QuizCards'
import MainNavbar from '../../components/navbar/MainNavbar'

const Questions = () => {
  return (
    <>
    <MainNavbar/>
    <div className="mt-32 mx-3">
      <h1 className='text-3xl font-extrabold text-center mb-5 tracking-tight bg-clip-text
        text-transparent bg-gradient-to-r from-indigo-700 via-pink-700 to-red-800'>All Questions</h1>
    <QuizCards/>      
    </div>
    </>
  )
}

export default Questions