import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import AddUpdateEntry from './pages/AddUpdateEntry';
import Resources from './pages/Resources';
import Navbar from './components/Navbar';
import UserContext from './utils/UserContext';
import { deleteEntry, getUserProfile, loginCheck } from './utils/API';
import ScrollToTop from './components/ScrollToTop';

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
    handleDeleteEntry: (entryId) => {
      deleteEntry(entryId)
        .then(getUserProfile)
        .then(({ data: {entries} }) => {
          this.setState({entries})
        })
        .catch(err => {
          console.log(err);
        });
    },
    getEntries: () => {
      getUserProfile()
        .then(({data: {entries}}) => {
          this.setState({entries})
        })
        .catch(err => {
          console.log(err);
        });
    },
    setLogout: () => {
      this.setState({
        isLoggedIn: false,
      });
    },
    checkLogin: () => {
      loginCheck()
        .then(({data: userInfo}) => {
          console.log(userInfo);
          this.setState({
            isLoggedIn: userInfo.isLoggedIn,
            firstName: userInfo.firstName,
            email: userInfo.email,
            id: userInfo._id
          })
        })
        .catch(err => console.log(err));
    }
  };

  render () {
    return (
      <Router>
        <UserContext.Provider value={this.state}>
        <Navbar />
        <ScrollToTop>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={UserHome} />
            <Route exact path='/add' component={AddUpdateEntry} />
            <Route exact path='/update/:id' component={AddUpdateEntry} />
            <Route exact path='/resources' component={Resources} />
            <Route render={() => 404} />
          </Switch>
        </div>
        </ScrollToTop>
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
