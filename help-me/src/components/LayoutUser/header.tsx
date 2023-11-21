import React, { useState } from 'react';
import User from './user.svg';
import Logout from './logout.svg';

export default function Header(props:any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-primary-900 fixed top-0 w-full h-14 ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <button className="bg-transparent border-none text-white absolute left-0 ml-2 mt-4" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`flex justify-end mr-10 mt-4 text-white ${isSidebarOpen ? 'content-shifted' : ''}`}>
        <div className='mr-1'>
          <p>Olá,</p>
        </div>
        <div className='mr-3'>
          {props.username}
        </div>
        <div className='mr-10'>
          <img src={User} alt="" width={20}/>
        </div>
        <div className='hover:cursor-pointer'>
          <a href="user-login">
            <img src={Logout} alt="" width={20}/>
          </a>
        </div>
      </div>
    </div>
  );
}
