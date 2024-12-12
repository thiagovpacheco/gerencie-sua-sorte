import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, UserPlus, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/dashboard" className="flex items-center text-gray-300 hover:text-white">
              <LineChart className="w-5 h-5 mr-1" />
              <span>Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/register" className="flex items-center text-gray-300 hover:text-white">
              <UserPlus className="w-5 h-5 mr-1" />
              <span>Register</span>
            </Link>
            <Link to="/login" className="flex items-center text-gray-300 hover:text-white">
              <LogIn className="w-5 h-5 mr-1" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;