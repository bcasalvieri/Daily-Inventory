import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import LoginButton from './LoginButton';

const StyledNavbar = styled(Navbar)`
  background-color: rgba(47,79,79, 0.8);
`;

function MyNavbar(props) {
  return (
    <StyledNavbar fixed='top'>
      <Navbar.Brand style={{color: 'white'}} href="/">Daily Inventory</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {(!props.isLoggedIn)
          ? <LoginButton />
          : 
            <Navbar.Text style={{color: 'white'}}>
              Welcome, {props.name}! 
              <a href='http://localhost:3001/auth/logout' className="ml-2"><i className="fas fa-sign-out-alt" style={{color: 'white'}}></i></a>
            </Navbar.Text>
        }
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

export default MyNavbar;
