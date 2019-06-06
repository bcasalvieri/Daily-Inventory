import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { ListGroup, Button } from 'react-bootstrap';

function Sidebar() {

  const userContext = useContext(UserContext);

  return (
    <div>
      <h1 className='text-center display-4'>Daily Inventory</h1>
      <h3 className='text-center'>Welcome, {userContext.firstName}!</h3>
      <Button
        as={Link}
        to='/add'
        variant='primary'
        block
        className='mb-4'
      >
        New Inventory
      </Button>
      <Button
        as={Link}
        to='/home'
        variant='success'
        block
        className='mb-4'
      >
        Saved Inventories
      </Button>
    </div>
  )
}

export default Sidebar;
