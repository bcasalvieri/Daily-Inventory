import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { Button } from 'react-bootstrap';
import '../assets/css/style.css';


function Sidebar() {

  const userContext = useContext(UserContext);

  return (
    <div className='mb-5'>
      <h1 className='sidebar-header text-center mb-3'>Daily Inventory</h1>
      <div className='sidebar-welcome mb-3'>
        Welcome, {userContext.firstName}! 
        <a href='http://localhost:3001/auth/logout' className="ml-2"><i className="fas fa-sign-out-alt"></i></a>
      </div>
      <NavLink to='/add' className='sidebar-link'>
        <Button
          block
          className='menu-button mb-3'
        >
          <i className='fas fa-plus mr-1'></i> New Inventory
        </Button>
      </NavLink>
      <NavLink to='/home' className='sidebar-link'>
        <Button
          block
          className='menu-button mb-3'
        >
          <i className='fas fa-glasses mr-1'></i> {userContext.firstName}'s Inventories
        </Button>
      </NavLink>
      <NavLink to='/resources' className='sidebar-link'>
        <Button
          block
          className='menu-button mb-3'
        >
          <i className='fas fa-book-open mr-1'></i> Resources
        </Button>
      </NavLink>
    </div>
  )
}

export default Sidebar;
