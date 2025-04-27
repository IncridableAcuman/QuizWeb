import React, { useContext, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { ThemeContext } from '../../contexts/ThemeProvider'

const Test = () => {
    const data=[
        {letter:"A",title:"<head>"},
        {letter:"B",title:"<body>"},
        {letter:"C",title:"<html>"},
        {letter:"D",title:"<title>"},
    ]
    const {theme}=useContext(ThemeContext);
    const [selectedOption,setSelectedOption]=useState(null);
    const handleOptionCLick=(index)=>{
      setSelectedOption(index);
    }
  return (
    <>
    <div className={`fixed top-0 left-0 w-full ${theme==="light"?"bg-gray-900 text-white":"bg-white text-gray-900"} min-h-screen`}>
      <Navbar/>
    <div className={`container w-full mx-auto paddingPracent mt-24 `}>
        <div className="flex flex-col md:flex-row items-center justify-between">
            {/* 1 */}
            <div className="w-full max-w-md space-y-4 mb-6">
                <p className='text-gray-500'>Questions 5 of 10</p>
                <p className='text-xl font-bold spacing'>Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit.
                      Numquam possimus non repellendus
                       blanditiis omnis saepe eveniet
                        quisquam quasi neque temporibus.</p>
                <input type="range" className='w-full' />
            </div>
            {/* 2 */}
            <div className="flex flex-col space-y-4 w-full max-w-md">
            {data.map((item, index) => (
              <div className={`space-y-2 w-full  p-4 rounded-xl shadow-lg ${theme==="light"?`bg-gray-800 text-white ${selectedOption===index?"border-2 border-purple-500 ":""}`:
                `bg-white text-gray-900 ${selectedOption===index?"border-2 border-purple-500":""}`}
               `} key={index}
                onClick={()=>handleOptionCLick(index)}>
                <div className={`flex items-center gap-2 cursor-pointer `}>
                  <p className={`bg-amber-400 text-white rounded px-2 ${selectedOption===index?"bg-blue-500":""}`}>{item.letter}</p>
                  <p className='text-md uppercase'>{item.title}</p>
                </div>
              </div>
            ))}
            <button className='w-full mx-auto bg-blue-500 text-white p-3 cursor-pointer
             rounded-2xl text-md shadow-lg hover:bg-blue-700 transition duration-300'>Submit Answer</button>
          </div>
        </div>
    </div>  
    </div>
    
    </>
  )
}

export default Test