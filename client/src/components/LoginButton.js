import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/css/style.css';

let loginPath = (process.env.NODE_ENV === "production" ? "https://daily-inventory.herokuapp.com/auth/google" : "http://localhost:3001/auth/google");

function LoginButton() {
  return (
    <Button
      className='login-button'
      as="a"
      href={loginPath}
      eventKey={1}
    >
      Login with <i className="fab fa-google-plus-g"></i>
    </Button>    
  )
}

export default LoginButton;
