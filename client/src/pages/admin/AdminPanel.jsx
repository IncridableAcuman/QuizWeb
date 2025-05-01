import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  ArrowBigUp, Brain, ChartArea, Code, CreativeCommons, Package, Type, Users } from 'lucide-react'
import { toast } from 'react-toastify';
import axiosAPI from '../../api/axiosAPI';
const AdminPanel = () => {
  const navigate=useNavigate();
  const data=[
    {name:"Users",icon:<Users/>,path:"#"},
    {name:"Results",icon:<ChartArea/>,path:"#"},
    {name:"Rating",icon:<ArrowBigUp/>,path:"#"},
    {name:"Create question",icon:<CreativeCommons/>,path:"#"}
  ] 
  const [formData,setFormData]=useState({
    title:'',
    number:'',
    category:'',
    options:[
      {key:'A',text:''},
      {key:'B',text:''},
      {key:'C',text:''},
      {key:'D',text:''}
    ],
    currentAnswer:'',
  });
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      await axiosAPI.post("/quizz/create",formData);
      toast.success("Question create");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong1");
    }
  }
  return (
    <>
    <div className="flex">
      <div className="w-64 h-screen bg-gray-950 text-white opacity-100 border-r-4 border-gray-700">
        <div className="flex items-center justify-between px-6 py-3 bg-gray-800 mb-5">
        <h1 className='text-lg font-semibold cursor-pointer' onClick={()=>navigate("/")}>Panel</h1>
        <Code className='text-gray-200'/>
        </div>
        <div className="space-y-3 px-4">
          {data.map((item,index)=>(
            <a href={item.path} key={index} className='flex items-center gap-5 hover:bg-gray-800 rounded-md p-3 transition duration-300'>
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
        <div className="fixed bottom-2 left-3 flex items-center gap-2">
          <p className='text-gray-400 text-sm uppercase'>Izzatbek</p>
          <p className=' text-gray-400 text-sm'>UBTUIT 2025 | All right</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="bg-white shadow-2xl w-full min-w-md p-6 rounded-2xl">
          <h1 className='text-center text-3xl font-bold mb-4'>Create Question</h1>
          <form className='space-y-4'>
            {/* 1 */}
            <div className="w-full flex items-center gap-2 border-2 border-gray-300 p-3">
              <Brain className='text-gray-700' size={20}/>
              <input type="text" 
            placeholder='Question title'
             className='w-full outline-none' value={formData.title} 
             onChange={(e)=>setFormData({...formData,title:e.target.value})} /></div>
             {/*  */}
            <div className="w-full flex items-center gap-2 border-2 border-gray-300 p-3">
              <Package/>
              <input type="number" placeholder='Question number' 
              className=' w-full outline-none' value={formData.number}
              onChange={(e)=>setFormData({...formData,number:e.target.value})} /></div>
              {/*  */}
              <div className="w-full flex items-center gap-2 border-2 border-gray-300 p-3">
              <Type/>
              <input type="text" placeholder='Question category' 
              className=' w-full outline-none' value={formData.category}
              onChange={(e)=>setFormData({...formData,category:e.target.value})} /></div>
            {/* options */}
            <div className="w-full flex flex-col space-y-3">

            {formData.options.map((option,index)=>(
              <input key={option.key} type="text" 
              placeholder={`Option ${option.key}`}
              className='outline-none border-2 border-gray-300 p-3 '
              value={option.text}
              onChange={(e)=>{
                const updateOption=[...formData.options];
                updateOption[index].text=e.target.value;
                setFormData({...formData,options:updateOption})
              }}  />
              
            ))}              
            </div>
            {/* current */}
            <div className="flex items-center gap-3">
              <select value={formData.currentAnswer} 
            onChange={(e)=>setFormData({...formData,currentAnswer:e.target.value})}
            className='border p-2' >
              <option value="">Select correct answer</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
            </select>
            <button className='bg-blue-500 text-white px-11 py-2
             shadow-2xl cursor-pointer hover:bg-blue-700 transition'
              onClick={handleSubmit}>Create Question</button>
            </div>      
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminPanel