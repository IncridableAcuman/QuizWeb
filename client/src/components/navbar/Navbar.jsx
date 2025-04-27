import { Moon, Sun, UserCircle } from 'lucide-react';
import { useContext, useState } from 'react';
import {ThemeContext} from '../../contexts/ThemeProvider'
import useAuthStore from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Navbar = () => {
  const {theme,toggleTheme}=useContext(ThemeContext);
  const [isOpen,setIsOpen]=useState(false);
  const {logout}=useAuthStore();
  const navigate=useNavigate();
  const handleLogout=async ()=>{
    await logout();
    localStorage.removeItem("accessToken");
    navigate("/auth");
    toast.success("Successfully logged out");
  }
  return (
    <div className={`fixed top-0 left-0 w-full flex items-center justify-between p-6 `}>
      <a href="/" className="text-2xl font-bold">
        Web<span className="text-purple-600">Logo</span>
      </a>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className='cursor-pointer transition'>
          {theme==="light"?<Moon className="w-6 h-6 text-white" />:<Sun className="w-6 h-6 text-yellow-500" />}
        </button>
        <UserCircle className='cursor-pointer relative' onClick={()=>setIsOpen(!isOpen)}
           aria-haspopup="tree" aria-expanded={isOpen} />

          {isOpen && (
             <div className={`absolute ${theme==="light"?"bg-gray-100 text-gray-900":"bg-gray-800 text-white"} mt-22 px-4 py-2`} >
          <p className=' cursor-pointer '>Izzatbek</p>
          <p className=' cursor-pointer ' onClick={handleLogout}>Logout</p>
        </div>
          )} 
      </div>
    </div>
  );
};

export default Navbar;