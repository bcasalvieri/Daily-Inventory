import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import AddUpdateEntry from './pages/AddUpdateEntry';
import Navbar from './components/Navbar';
import UserContext from './utils/UserContext';
import { deleteEntry, getUserProfile } from './utils/API';

class App extends React.Component {
  
  state = {
    isLoggedIn: false,
    entries: [],
    id: "",
    firstName: "",
    email: "",
    setLogin: (userData) => {
      this.setState({
        id: userData._id,
        firstName: userData.firstName,
        email: userData.email,
        isLoggedIn: true,
        entries: userData.entries
      });
    },
    handleDeleteNote: (noteId) => {
      deleteEntry(noteId)
        .then(getUserProfile)
        .then(({ data: {entries} }) => {
          this.setState({entries})
        })
        .catch(err => {
          console.log(err);
        });
    },
    setLogout: () => {
      this.setState({
        isLoggedIn: false
      });
    }
  };

  render () {
    return (
      <Router>
        <UserContext.Provider value={this.state}>
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={UserHome} />
            <Route exact path='/add' component={AddUpdateEntry} />
            <Route exact path='/update/:id' component={AddUpdateEntry} />
            <Route render={() => 404} />
          </Switch>
        </div>
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
