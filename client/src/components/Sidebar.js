import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { Button, Dropdown } from 'react-bootstrap';
import '../assets/css/style.css';
import DropdownToggle from 'react-bootstrap/DropdownToggle';


function Sidebar(props) {

  const userContext = useContext(UserContext);

  return (
    <div className='mb-5'>
      <h1 className='sidebar-header text-center mb-3'>Daily Inventory</h1>
      <div className='sidebar-welcome mb-3'>
        Welcome, {userContext.firstName}! 
        <a href='/auth/logout' className="ml-2"><i className="fas fa-sign-out-alt"></i></a>
      </div>
      <NavLink to='/add' className='sidebar-link'>
        <Button
          block
          className='menu-button mb-3'
        >
          <i className='fas fa-plus mr-1'></i> New Inventory
        </Button>
      </NavLink>
      <Button
          block
          className='menu-button mb-3'
          onClick={props.saved}
        >
          <i className='fas fa-glasses mr-1'></i> {userContext.firstName}'s Inventories
      </Button>
      <Dropdown alignRight>
        <DropdownToggle block className='menu-button'>
          <i className='fas fa-book-open mr-1'></i> Resources
        </DropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={props.steps}>12 Steps</Dropdown.Item>
          <Dropdown.Item onClick={props.principles}>8 Principles</Dropdown.Item>
          <Dropdown.Item onClick={props.prayer}>Serenity Prayer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Sidebar;
