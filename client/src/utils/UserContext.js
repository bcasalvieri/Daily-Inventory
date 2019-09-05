import React, {createContext} from 'react';

const UserContext = createContext({
  isLoggedIn: false,
  entries: [],
  id: "",
  firstName: "",
  email: ""
});

export default UserContext;
