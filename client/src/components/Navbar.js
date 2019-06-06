import React, { useContext, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const StyledNavbar = styled(Navbar)`
  background-color: rgba(47,79,79, 0.8);
`;

function MyNavbar() {

  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.checkLogin();
  }, []);

  return (
    <StyledNavbar fixed='top'>
      <Navbar.Brand style={{color: 'white'}}>Daily Inventory</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {(!userContext.isLoggedIn)
          ? <LoginButton />
          : 
            <Navbar.Text style={{color: 'white'}}>
              Welcome, <Link to="/home" style={{color: 'white'}}>{userContext.firstName}</Link>! 
              <a href='http://localhost:3001/auth/logout' className="ml-2"><i className="fas fa-sign-out-alt" style={{color: 'white'}}></i></a>
            </Navbar.Text>
        }
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

export default MyNavbar;
