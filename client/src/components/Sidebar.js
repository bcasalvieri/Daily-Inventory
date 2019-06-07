import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { Button } from 'react-bootstrap';
import '../assets/style.css'


function Sidebar() {

  const userContext = useContext(UserContext);

  return (
    <div>
      <h1 className='text-center display-4 mb-4' style={{color: '#004D80'}}>Daily Inventory</h1>
      {/* <h3 className='text-center mb-4'>Welcome, {userContext.firstName}!</h3> */}
      <NavLink to='/add' className='sidebar-link'>
        <Button
          // variant='primary'
          block
          className='menu-button mb-3'
        >
          New Inventory
        </Button>
      </NavLink>
      <NavLink to='/home' className='sidebar-link'>
        <Button
          // variant='success'
          block
          className='menu-button mb-3'
        >
          Saved Inventories
        </Button>
      </NavLink>
    </div>
  )
}

export default Sidebar;
