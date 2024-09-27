import React from 'react';	
import { Link } from 'react-router-dom';
import { MoneyIcon, HomeIcon, UsersIcon, CodeIcon, TargetIcon } from '../../assets/Icons';

const BottomNavBar = () => (
  <div className="fixed inset-x-0 bottom-0 bg-white shadow-lg md:hidden">
    <div className="flex justify-around max-w-md mx-auto p-2">
      <Link to="/feed" className="flex flex-col items-center text-gray-700 hover:text-custom-brown cursor-pointer">
        <MoneyIcon className="text-xl mb-1" />
        <span className="text-sm">Feed</span>
      </Link>
      <Link to="/subscribing" className="flex flex-col items-center text-gray-700 hover:text-custom-brown cursor-pointer">
        <UsersIcon className="text-xl mb-1" />
        <span className="text-sm">Subscribing</span>
      </Link>
      <Link to="/addrecipe" className="flex flex-col items-center text-gray-500 hover:text-custom-brown cursor-pointer">
        <HomeIcon className="text-3xl mb-1" />
      </Link>
      <Link to="/mycookbook" className="flex flex-col items-center text-gray-700 hover:text-custom-brown cursor-pointer">
        <CodeIcon className="text-xl mb-1" />
        <span className="text-sm">Cookbook</span>
      </Link>
      <Link to="/profile" className="flex flex-col items-center text-gray-700 hover:text-custom-brown cursor-pointer">
        <TargetIcon className="text-xl mb-1" />
        <span className="text-sm">Profile</span>
      </Link>
    </div>
  </div>
);

export default BottomNavBar;
