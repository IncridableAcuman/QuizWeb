import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axiosAPI from '../../api/axiosAPI';
const Result = () => {
  const [data,setData]=useState(null);
  const userId=localStorage.getItem("userId");
  const handleScore=async ()=>{
    try {
      const {data}=await axiosAPI.get(`/quizz/question/score?userId=${userId}`);
      setData(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }
  useEffect(()=>{
    handleScore()
  },[]);
  return (
    <>
    <div className="lg:ml-64 paddingPracent">
      <table className='w-full border border-gray-300'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='border px-4 py-2'>Id</th>
            <th  className='border px-4 py-2'>Options</th>
            <th  className='border px-4 py-2'>Results</th>
            <th  className='border px-4 py-2'>isCorrect</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr>
            <td className='border px-4 py-2'>{userId}</td>
            <td className='border px-4 py-2'>Izzatbek</td>
            <td className='border px-4 py-2'>{data}</td>
            <td className='border px-4 py-2'>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Result