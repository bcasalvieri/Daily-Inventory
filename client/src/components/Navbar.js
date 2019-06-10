import React, { useContext, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import '../assets/css/style.css';


function MyNavbar() {

  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.checkLogin();
  }, []);

  let button;

  if (!userContext.isLoggedIn) {
    button = <LoginButton />
  } else {
    button =  <a href='/auth/logout' className="ml-2">Logout <i className="fas fa-sign-out-alt"></i></a>
  }

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
          {button}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default MyNavbar;
