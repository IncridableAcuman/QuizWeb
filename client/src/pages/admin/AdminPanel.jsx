import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  ArrowBigUp, ChartArea, Code, CreativeCommons, Users } from 'lucide-react'
const AdminPanel = () => {
  const navigate=useNavigate();
  const data=[
    {name:"Users",icon:<Users/>,path:"#"},
    {name:"Results",icon:<ChartArea/>,path:"#"},
    {name:"Rating",icon:<ArrowBigUp/>,path:"#"},
    {name:"Create question",icon:<CreativeCommons/>,path:"#"}
  ] 
  return (
    <>
    <div className="flex">
      <div className="w-64 h-screen bg-gray-900 text-white">
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
      <div className="">Data</div>
    </div>
    </>
  )
}

export default AdminPanel