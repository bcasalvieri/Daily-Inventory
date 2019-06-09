import React, { useContext, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import '../assets/css/style.css'


function MyNavbar() {

  const userContext = useContext(UserContext);

  useEffect(() => {
    userContext.checkLogin();
  }, []);

  return (
    <Navbar fixed='top' className='px-5'>
      <Navbar.Brand as={Link} to={{pathname: '/', state: {isLoggedIn: userContext.isLoggedIn}}}>Daily Inventory</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
        {(!userContext.isLoggedIn)
          ? <LoginButton />
          : ""
            // <Navbar.Text style={{color: 'white', fontSize: '1.15rem'}}>
            //   Welcome, <Link to="/home" style={{color: 'whitesmoke'}}>{userContext.firstName}</Link>! 
            //   <a href='http://localhost:3001/auth/logout' className="ml-2"><i className="fas fa-sign-out-alt" style={{color: 'whitesmoke'}}></i></a>
            // </Navbar.Text>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar;
