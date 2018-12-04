import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './demo'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/navigation';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import NewsFeed from './container/newsfeed';
import MyWall from './container/mywall/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={NewsFeed} />
            <Route path="/mywall/:page" component={MyWall} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Register} />
          </div>

        </Provider>
      </Router>
    );
  }
}

export default App;
