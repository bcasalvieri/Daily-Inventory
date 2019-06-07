import React from 'react';
import { Button } from 'react-bootstrap';

function LoginButton() {
  return (
    <Button
      as="a"
      href="http://localhost:3001/auth/google"
      variant='danger'
      style={{borderRadius: '50px'}}
    >
      Login with <i className="fab fa-google-plus-g"></i>
    </Button>    
  )
}

export default LoginButton;
