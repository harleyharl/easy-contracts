import React, { Component } from 'react';
import{ connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';

class Profile extends Component {

  render() {
    return (
      <div>
        <h1>Your Profile</h1>

        <h2>Username</h2>
          <p>{this.props.username}</p>


        <h2>Avatar</h2>
          <p/>{this.props.avatar}<p/>

        <h2>Bio</h2>
          <p/>{this.props.bio}<p/>

          <Link to='/'>
           go app page
          </Link>
          <Logout />
       </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.currentUser.username,
  bio: state.currentUser.bio,
  avatar: state.currentUser.avatar
})

export default connect(mapStateToProps)(Profile);
