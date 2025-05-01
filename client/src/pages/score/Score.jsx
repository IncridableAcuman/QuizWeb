import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import useAuthStore from '../../store/useAuthStore'
import { Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Score = () => {
    const {theme}=useAuthStore();
    const [score,setScore]=useState(0);
    const [totalQuestion,setTotalQuestion]=useState(0);
    const navigate=useNavigate();

    const handleNavigate= ()=>{
      localStorage.removeItem("totalQuestion");
      localStorage.removeItem("score");
      navigate("/test");
    }

    useEffect(()=>{
      const savedScore=JSON.parse(localStorage.getItem("score"));
      if(savedScore) setScore(savedScore);
    },[]);

    useEffect(()=>{
      const savedTotal=JSON.parse(localStorage.getItem("totalQuestion"));
      if(savedTotal) setTotalQuestion(savedTotal);
    },[]);
  return (
    <>
    <div className={`fixed top-0 left-0 w-full min-h-screen ${theme==="light"?"bg-gray-900 text-white":"bg-white text-gray-900"}`}>
      <Navbar/>
    <div className={`container w-full min-h-screen mx-auto paddingPracent mt-12 lg:mt-24 `}>
  <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {/* 1 */}
            <div className="w-full max-w-md space-y-4 lg:mb-6">
                <h2 className='text-5xl'>Quizz Complated</h2>
                <h2 className='text-5xl font-extrabold'>Your scored...</h2>
            </div>
            {/* 2 */}
            <div className="flex flex-col space-y-4 w-full max-w-md">
              <div className={`space-y-2 w-full  p-4 rounded-xl shadow-lg ${theme==="light"?`bg-gray-800 text-white`:
                `bg-white text-gray-900 `}
               `} 
                >
                <div className="text-center space-y-3">
                    <p className='flex items-center justify-center text-lg font-bold gap-3 mx-auto w-full text-center'>
                        <Code/>
                        HTML</p>
                    <span className='text-9xl'>{score}</span>
                    <p className='pt-3'>out of {totalQuestion}</p>
                </div>
              </div>
            
            <button className='w-full mx-auto bg-blue-500 text-white p-3 cursor-pointer
             rounded-2xl text-md shadow-lg hover:bg-blue-700 transition duration-300'
             onClick={handleNavigate}
             >Play Again</button>
          </div>
        </div>       
       
    </div>  
    </div>
    </>
  )
}

export default Score