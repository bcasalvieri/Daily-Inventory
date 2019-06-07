import React, { useContext, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import '../assets/style.css'

const StyledNavbar = styled(Navbar)`
  background-color: rgba(255,255,255, 0.2);
`;

function MyNavbar() {

  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.checkLogin();
  }, []);

  return (
    <StyledNavbar fixed='top' className='px-5'>
      <Navbar.Brand >Daily Inventory</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {(!userContext.isLoggedIn)
          ? <LoginButton />
          : 
            <Navbar.Text style={{color: 'white', fontSize: '1.25rem'}}>
              Welcome, <Link to="/home" style={{color: 'white'}}>{userContext.firstName}</Link>! 
              <a href='http://localhost:3001/auth/logout' className="ml-2"><i className="fas fa-sign-out-alt" style={{color: 'white'}}></i></a>
            </Navbar.Text>
        }
      </Navbar.Collapse>
    </StyledNavbar>
  )
}

export default MyNavbar;
