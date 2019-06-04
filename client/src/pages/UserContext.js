import React from 'react';

const UserContext = React.createContext({
  isLoggedIn: false,
  entries: [],
  id: "",
  firstName: "",
  email: ""
});

export default UserContext;
