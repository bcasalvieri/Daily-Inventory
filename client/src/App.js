import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import AddUpdateEntry from './pages/AddUpdateEntry';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={UserHome} />
          <Route exact path='/add' component={AddUpdateEntry} />
          <Route exact path='/update/:id' component={AddUpdateEntry} />
          <Route render={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
