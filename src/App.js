import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './demo'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Navigation from './components/navigation';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import NewsFeed from './container/newsfeed';
import MyWall from './container/mywall/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import { func } from 'prop-types';
const store = createStore(rootReducer);

class App extends Component {
  checkIsLogined() {
    const pk = localStorage.getItem('privateKey');
    return pk != null;
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" render={() => {
              if (this.checkIsLogined() === true)
                return <NewsFeed />
              else return <Redirect to='/signin' />
            }} />
            <Route path="/mywall/:page"
              render={() => {
                if (this.checkIsLogined() === true)
                  return <Route path="/mywall/:page" component={MyWall}/>
                else return <Redirect to='/signin' />
              }}
            />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={Register} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
