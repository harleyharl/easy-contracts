import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Login from '../containers/Login'


class Home extends Component {

  render() {
    if(localStorage.token !== null){
      return (
        <Redirect to='/dashboard' />
      )
    } else {
      return (
        <Login />
      );
    }
  }
}

export default Home;
