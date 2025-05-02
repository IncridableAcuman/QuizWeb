import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
    <div className="flex h-screen">
        <Sidebar/>
        <div className="flex flex-col flex-1">
            <div className="p-4 overflow-auto flex-1">
                <Outlet/>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainLayout