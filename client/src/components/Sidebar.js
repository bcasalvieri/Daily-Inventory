import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const ListGroupItem = styled(ListGroup.Item)`
  background-color: red;
  padding: 10px;
  border: none;
  &:hover {
    background-color: blue;
  }
`;

function Sidebar() {

  const userContext = useContext(UserContext);

  return (
    <div>
      <h1 className='text-center display-4'>Daily Inventory</h1>
      <h3 className='text-center'>Welcome, {userContext.firstName}!</h3>
      <ListGroup>
        <ListGroup.Item>New Inventory</ListGroup.Item>
        <ListGroup.Item>Saved Inventories</ListGroup.Item>
        <ListGroup.Item>12 Steps</ListGroup.Item>
        <ListGroup.Item>8 Principles</ListGroup.Item>
        <ListGroup.Item>Serenity Prayer</ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Sidebar;
