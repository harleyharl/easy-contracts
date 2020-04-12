import React, { Component } from 'react';
import{ connect } from 'react-redux';
import Logout from '../components/Logout'



class Dashboard extends Component {

  render() {
    return (
      <div>
      HELLO
          <Logout />
       </div>

    )
  }
}

export default Dashboard;
