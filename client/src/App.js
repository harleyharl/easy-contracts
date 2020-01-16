import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './actions/actions.js';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Profile from './containers/Profile'
import Home from './components/Home'
import NotFound from './components/NotFound'

const PrivateRoute = ({ component: Component, ...props }) => {
  debugger
  return (
    <Route {...props} render={innerProps => innerProps.auth ? <Component {...innerProps} /> : <Redirect to="/login" /> }/>
  );
};

class App extends Component {

  componentDidMount = (history) => {
    this.props.getProfileFetch(history)
  }
  //
  // auth = {
  //   isAuthed: this.props.currentUser.authed
  // }

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  render() {
    debugger
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} auth={this.props.currentUser.authed} />
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
