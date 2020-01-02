import React, { Component } from 'react';
import Bootstrap from "react-bootstrap";
import{ connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';



class Profile extends Component {

  render() {
    debugger
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
       </div>

    )
  }
}

const mapStateToProps = state => ({
  username: state.currentUser.currentUser.username,
  bio: state.currentUser.currentUser.bio,
  avatar: state.currentUser.currentUser.avatar
})

export default connect(mapStateToProps)(Profile);
