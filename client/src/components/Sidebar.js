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
      </div>
      <Button
          block
          className='menu-button mb-3'
          onClick={props.saved}
        >
          <i class="fas fa-home mr-1"></i> Home
      </Button>
      <NavLink to='/add' className='sidebar-link'>
        <Button
          block
          className='menu-button mb-3'
        >
          <i className='fas fa-plus mr-1'></i> New Inventory
        </Button>
      </NavLink>
      <NavLink to='/summary' className='sidebar-link'>
        <Button
          block
          className='menu-button mb-3'
        >
          <i className='fas fa-glasses mr-1'></i> Read All Inventories
        </Button>
      </NavLink>
      <Dropdown alignRight className='mb-3'>
        <DropdownToggle block className='menu-button'>
          <i className='fas fa-book-open mr-1'></i> Resources
        </DropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={props.steps}>12 Steps</Dropdown.Item>
          <Dropdown.Item onClick={props.principles}>8 Principles</Dropdown.Item>
          <Dropdown.Item onClick={props.prayer}>Serenity Prayer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown alignRight className='mb-3'>
        <DropdownToggle block className='menu-button'>
          <i className='fas fa-search-location mr-1'></i> Find A Meeting
        </DropdownToggle>

        <Dropdown.Menu>
          <Dropdown.Item
            as='a'
            href='https://www.aa.org/pages/en_US/find-aa-resources'
            target='_blank'
          >
            Alcoholics Anonymous
          </Dropdown.Item>
          <Dropdown.Item
            as='a'
            href='https://locator.crgroups.info/'
            target='_blank'
          >
            Celebrate Recovery
          </Dropdown.Item>
          <Dropdown.Item
            as='a'
            href='https://www.sa.org/meetings/'
            target='_blank'
          >
            Sexaholics Anonymous
          </Dropdown.Item>
          <Dropdown.Item
            as='a'
            href='https://saa-recovery.org/meetings/'
            target='_blank'
          >
            Sex Addicts Anonymous
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Sidebar;
