import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Mail, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'

const ForgotPassword = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const {forgotPassword,loading}=useAuthStore();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        await forgotPassword(email);
    }
   useEffect(()=>{
        if(localStorage.getItem("accessToken")){
            navigate("/");
        }
    },[navigate]);
  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-purple-950 to-indigo-950 text-white">
        <div className="pt-32 flex flex-col items-center justify-center w-full max-w-md  mx-auto">
            <div className="bg-white text-gray-900 p-6 w-full rounded-2xl shadow-lg ">
                <h1 className='text-3xl text-center font-bold mb-5 tracking-tight bg-clip-text text-transparent
                bg-gradient-to-r from-indigo-600 via-pink-700 to-red-700 '>Forgot Password</h1>
                <p className='mb-3 text-sm text-gray-700'>Reset Password Link Sent to your email soon</p>
                <form className='space-y-4' onSubmit={handleSubmit} >
                    <div className="w-full flex items-center gap-5 bg-gray-300 px-5 py-2.5 rounded-full">
                        <Mail/>
                        <input type="email" placeholder='Your Email'
                        className='w-full outline-none bg-transparent'
                         onChange={(e)=>setEmail(e.target.value)}  />
                    </div>
                    <button className='flex items-center gap-3 mx-auto mt-5 bg-gradient-to-br
                    from-indigo-600 via-pink-700 to-red-700 text-white w-full px-5 py-2.5 rounded-full cursor-pointer shadow-md hover:shadow-lg transition duration-300'>
                        <Send/>
                        <p>{`${loading? "Loading...":"Forgot Password"}`}</p>
                    </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default ForgotPassword