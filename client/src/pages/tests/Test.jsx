import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { ThemeContext } from '../../contexts/ThemeProvider'
import { ArrowLeft } from 'lucide-react'
import { toast } from 'react-toastify'
import axiosAPI from '../../api/axiosAPI'

const Test = () => {
    const {theme}=useContext(ThemeContext);
    const [questionData,setQuestionData]=useState([]);
    const [selectedOption,setSelectedOption]=useState(null);
    const handleOptionCLick=(index)=>{
      setSelectedOption(index);
    }
    const handleQuestion=async ()=>{
      try {
        const {data}=await axiosAPI.get("/quizz/questions/all");
        setQuestionData(data);
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    }

    useEffect(()=>{
      handleQuestion();
    },[]);
  return (
    <>
    <div className={`fixed top-0 left-0 w-full min-h-screen ${theme==="light"?"bg-gray-900 text-white":"bg-white text-gray-900"}`}>
      <Navbar/>
    <div className={`container w-full min-h-screen mx-auto paddingPracent mt-12 lg:mt-24 `}>
      {questionData.map((question,index)=>(
  <div className="flex flex-col md:flex-row items-center justify-between gap-5" key={index}>
            {/* 1 */}
            <div className="w-full max-w-md space-y-4 lg:mb-6">
                <p className='text-gray-500'>Questions <span>{question.number}</span> of <span>{questionData.length}</span></p>
                <p className=' text-md lg:text-xl font-bold spacing'>{question.title}</p>
                <input type="range" className='w-full' />
            </div>
            {/* 2 */}
            <div className="flex flex-col space-y-4 w-full max-w-md">
            {question.options.map((item, index) => (
              <div className={`space-y-2 w-full  p-4 rounded-xl shadow-lg ${theme==="light"?`bg-gray-800 text-white ${selectedOption===index?"border-2 border-purple-500 ":""}`:
                `bg-white text-gray-900 ${selectedOption===index?"border-2 border-purple-500":""}`}
               `} key={index}
                onClick={()=>handleOptionCLick(index)}>
                <div className={`flex items-center gap-2 cursor-pointer `}>
                  <p className={`bg-amber-400 text-white rounded px-2 ${selectedOption===index?"bg-blue-500":""}`}>{item.key}</p>
                  <p className='text-md uppercase'>{item.text}</p>
                </div>
              </div>
            ))}
            {questionData.length>1 && (
             <p className='flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white'>
              <ArrowLeft/>
              Back
            </p> 
            )}
            
            <button className='w-full mx-auto bg-blue-500 text-white p-3 cursor-pointer
             rounded-2xl text-md shadow-lg hover:bg-blue-700 transition duration-300'>Submit Answer</button>
          </div>
        </div>       
      ))}
       
    </div>  
    </div>
    
    </>
  )
}

export default Test