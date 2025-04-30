import { Moon, Sun, UserCircle } from 'lucide-react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';
import useAuthStore from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('accessToken');
    navigate('/auth');
    toast.success('Successfully logged out');
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-6 ${
        theme === 'light' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <a href="/" className="text-2xl font-bold">
        Web<span className="text-purple-600">Logo</span>
      </a>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="cursor-pointer transition" aria-label="Toggle theme">
          {theme === 'light' ? (
            <Moon className="w-6 h-6 text-white" />
          ) : (
            <Sun className="w-6 h-6 text-yellow-500" />
          )}
        </button>
        <UserCircle
          className="cursor-pointer relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div
            className={`absolute top-full right-6 mt-2 px-4 py-2 rounded-lg shadow-lg ${
              theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-800 text-white'
            }`}
          >
            <p className="cursor-pointer py-1 hover:text-purple-600">Izzatbek</p>
            <p className="cursor-pointer py-1 hover:text-purple-600" onClick={handleLogout}>
              Logout
            </p>
            <p className="cursor-pointer py-1 hover:text-purple-600">Panel</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;