import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './actions/actions.js';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Logout from './components/Logout';
import Profile from './containers/Profile'
import Dashboard from './containers/Dashboard'
import Home from './components/Home'
import NotFound from './components/NotFound'
import PrivateRoute from './PrivateRoute'

class App extends Component {

  componentDidMount = (history) => {
    this.props.getProfileFetch(history)
  }



  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  authed: state.authed
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
