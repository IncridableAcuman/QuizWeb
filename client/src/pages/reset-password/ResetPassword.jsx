import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Lock, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
const ResetPassword = () => {
  const navigate=useNavigate();
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const {resetPassword}=useAuthStore();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    await resetPassword(password,confirmPassword);
    navigate("/login");
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
      <div className="w-full max-w-lg flex flex-col items-center justify-center pt-32 mx-auto">
        <div className="bg-white text-gray-900 w-full rounded-3xl shadow-lg p-4">
          <h3 className='text-3xl text-center font-bold mb-5 tracking-tight bg-clip-text text-transparent
                bg-gradient-to-r from-indigo-600 via-pink-700 to-red-700'>Reset Password</h3>
                 <p className='mb-3 text-sm text-gray-700'>Enter and repeat new password</p>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className="flex items-center gap-3 bg-gray-300 px-5 py-2.5 rounded-full">
                <Lock/>
                <input type="password" placeholder='Password' className='w-full bg-transparent outline-none'
                value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <div className="flex items-center gap-3 bg-gray-300 px-5 py-2.5 rounded-full">
                <Lock/>
                <input type="password" placeholder='Confirm Password' className='w-full bg-transparent outline-none'
                value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
              </div>
              <button className='flex items-center gap-3 mx-auto mt-5 bg-gradient-to-br
                    from-indigo-600 via-pink-700 to-red-700 text-white w-full px-5 py-2.5 rounded-full cursor-pointer shadow-md hover:shadow-lg transition duration-300'>
                        <Send/>
                        <p>Reset Password</p>
                    </button>
                    <p className='mt-3'></p>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ResetPassword