import React, { Component } from 'reactn';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import NewArticle from './components/NewArticle';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Register}/>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/new-article" component={NewArticle} />
        </div>
      </Router>
    );
  }
}

export default App;
