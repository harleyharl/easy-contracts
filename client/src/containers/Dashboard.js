import React, { Component } from 'react';
import{ connect } from 'react-redux';
import Logout from '../components/Logout'
import { Link } from 'react-router-dom'



class Dashboard extends Component {

  render() {
    return (
     <div>
      HELLO. You have no contracts. Click <Link to='/contracts/new'>here</Link> to make one!
      <Logout />
     </div>
    )
  }
}

export default Dashboard;
