import React, { useContext, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import '../assets/css/style.css';
import LogoutButton from './LogoutButton';


function MyNavbar() {

  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.checkLogin();
  }, []);

  let button;

  return (
    <Navbar fixed='top' className='px-5' expand="md">
      <Navbar.Brand
      as={Link}
      to={{pathname: '/', state: {isLoggedIn: userContext.isLoggedIn}}}
      >
        Daily Inventory
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav>
          {!userContext.isLoggedIn ? <LoginButton /> : <LogoutButton />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default MyNavbar;
