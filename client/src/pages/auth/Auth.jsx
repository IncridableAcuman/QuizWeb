import React, { useEffect } from 'react'
import { Code, LogIn } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const Auth = () => {
  const data=[
    {name:"HTML",icon:<Code/>,path:"#"},
    {name:"CSS",icon:<Code/>,path:"#"},
    {name:"JS",icon:<Code/>,path:"#"},
  ]
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("accessToken")){
      navigate("/");
    }
  },[navigate]);
  return (
    <>
    <div className="flex items-center justify-between p-6">
    <a href="#" className="text-2xl font-bold">
        Web<span className="text-purple-600">Logo</span>
      </a>
      <button className='flex items-center gap-2 border px-3 py-2 rounded-full cursor-pointer hover:bg-gray-100'
       onClick={()=>navigate("/login")}>Sign In
        <LogIn className='text-gray-400'/>
      </button>
    </div>
    {/* data */}
   <div className="container mx-auto px-4 sm:px-6 lg:px-12 lg:py-12">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="space-y-3 mb-6 md:mb-0 w-full">
        <h1 className='text-4xl md:text-5xl'>Welcome to the</h1>
        <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
              bg-gradient-to-r from-indigo-700 via-pink-700 to-red-800 text-shadow'>
              Quizz Frontend!
            </h2>
            <p className='text-gray-700'>Pick a subject to get started</p>
      </div>
      <div className="flex flex-col space-y-6 w-full max-w-md">
            {data.map((item, index) => (
              <div className="space-y-2 w-full bg-white p-4 rounded-xl shadow-lg" key={index} onClick={()=>navigate("/login")}>
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className='bg-amber-400 text-white rounded p-2'>{item.icon}</p>
                  <p className='text-xl font-bold uppercase'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
    </div>
   </div>
    </>
  )
}

export default Auth