import React, { Component } from 'react';
import Bootstrap from "react-bootstrap";
import{ connect } from 'react-redux';


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
       </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.currentUser.currentUser.user.username,
  bio: state.currentUser.currentUser.user.bio,
  avatar: state.currentUser.currentUser.user.avatar
})

export default connect(mapStateToProps)(Profile);
