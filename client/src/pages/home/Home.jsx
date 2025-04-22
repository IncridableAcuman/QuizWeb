import React from 'react'
import MainNavbar from '../../components/navbar/MainNavbar'
import QuizCards from '../../components/card/QuizCards'
import { Brain, Info, InfoIcon, TestTube, Type, User } from 'lucide-react'
import Footer from '../../components/footer/Footer'
const Home = () => {
  const data=[
    {icon:<User size={20}/>,count:1,name:"Users"},
    {icon:<Brain size={20}/>,count:6,name:"Quizzes"},
    {icon:<Type size={20}/>,count:5,name:"Categories"},
    {icon:<Type size={20}/>,count:5,name:"Categories"},
  ]
  return (
    <>
    <MainNavbar/>
    <div className="grid grid-cols-1 lg:grid-cols-2 paddingPracent mt-32 gap-10">
        <img src="./me.jpg" alt="me" className=' rounded-full' />
        <div className="pt-12">
          <h1 className='text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r
          from-indigo-700 to-pink-700 pb-3'>The results are with us.</h1>
          <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Dolorum facere expedita blanditiis, dolor nihil nesciunt veniam temporibus,
              iste quia rerum aut quas voluptas animi excepturi laboriosam quisquam. Neque 
              quam sapiente quas suscipit.</p>
              <div className="flex items-center gap-5 pt-5">
                <button className='flex items-center gap-3 bg-gray-800 text-white px-5 py-2.5 rounded shadow-lg cursor-pointer'>
                  Tests
                  <TestTube/>
                </button>
                <button className='flex items-center gap-3 bg-gray-800 text-white px-5 py-2.5 rounded shadow-lg cursor-pointer opacity-50 hover:bg-gray-950 transition'>
                  About
                  <InfoIcon/>
                </button>
              </div>
        </div>
    </div> 
    <div className="pt-12">
    <h1 className='text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r
          from-indigo-700 to-pink-700 pb-3 text-center'>Choose the one that is convenient for you.</h1>
          <div className="p-4">
            <QuizCards/>
          </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 paddingPracent">
      {data.map((item,index)=>(
        <div className="bg-gradient-to-br from-indigo-700 via-pink-700 to-red-800 text-white rounded-2xl text-center" key={index}>
          <center>
          <h2 className='pt-3'>{item.icon}</h2>            
          </center>
          <p className='text-3xl font-bold'>{item.count}</p>
          <p className='text-md pb-3'>{item.name}</p>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  )
}

export default Home