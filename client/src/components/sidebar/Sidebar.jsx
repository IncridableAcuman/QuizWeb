import { useState } from "react"
import {BookA, Home, Menu, User, Users, X} from 'lucide-react'
const Sidebar = () => {
    const [isOpen,setIsOpen] = useState(false);

    const menuItems = [
        {name:"Home",icon:<Home size={20} />,path:'/'},
        {name:"Users",icon:<Users size={20} />,path:"/data/users"},
        {name:"Results",icon:<BookA size={20} />, path:"/data/result"},
        {name:"Admin",icon:<User size={20} />, path:"/admin"}
    ]

  return (
    <>
    <div className="flex">
        <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform 
            ${isOpen ? "translate-x-0" : "-translate-x-64"} 
            transition-transform duration-300 ease-in-out lg:translate-x-0`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                      <h2 className="text-lg font-semibold">Dashboard</h2>                     
                    {isOpen && (
                       <button className="lg:hidden text-gray-300 hover:text-white"
                    onClick={()=>setIsOpen(false)}>
                        <X size={24} />
                    </button> 
                    )}
                    
                </div>
                <nav className="mt-4">
                    {menuItems.map((item,index)=>(
                        <a key={index} href={item.path} className="flex items-center gap-3 px-4 py-3 text-gray-300
                         hover:bg-gray-800 hover:text-white transition rounded-lg">
                            {item.icon}
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
            {/* toggle button */}
            {!isOpen && (
              <button
            className="lg:hidden fixed top-4 left-4 bg-gray-900 text-white p-2 rounded-md shadow-md"
            onClick={()=>setIsOpen(true)} >
                <Menu size={24}/>
            </button>  
            )}
            
            <div className="flex-1 p-6">
            </div>
    </div>
    </>
  )
}

export default Sidebar