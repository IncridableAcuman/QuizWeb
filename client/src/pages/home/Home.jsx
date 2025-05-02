import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Code } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeProvider'
import useQuizzStore from '../../store/quizzStore'

const Home = () => {
  const {theme}=useContext(ThemeContext);
  const {selectOption}=useQuizzStore();
  const data=[
    {name:"HTML",icon:<Code/>,path:"/test"},
    {name:"CSS",icon:<Code/>,path:"/test"},
    {name:"JS",icon:<Code/>,path:"/test"},
  ]
  const navigate=useNavigate();
  return (
    <>
    <div className={`fixed top-0 left-0 w-full ${theme==="light"?"bg-gray-900 text-white":"bg-white text-gray-900"} min-h-screen`}>
    <Navbar/>
    <div className={`container w-full min-h-screen mx-auto paddingPracent mt-24`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-4 mb-6">
            <h1 className='text-4xl md:text-5xl'>Are you ready?</h1>
            <h2 className='text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
             bg-gradient-to-r from-indigo-700 via-pink-700 to-red-800'>To start the test.</h2>
          </div>
          <div className={`flex flex-col space-y-6 w-full max-w-md `}>
            {data.map((item, index) => (
              <div className={`space-y-2 w-full ${theme==="light"?"bg-gray-800 text-white hover:bg-gray-950 transition duration-300":"bg-white text-gray-900 hover:bg-gray-100 transition duration-300"} p-4 rounded-xl shadow-lg`} key={index}>
                <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/test")}>
                  <p className='bg-amber-400 text-white rounded p-2'>{item.icon}</p>
                  <p className='text-xl font-bold uppercase'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>      
    </div>
    </>
  )
}

export default Home