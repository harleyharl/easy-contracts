import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../actions/actions.js';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.userLoginFetch(this.props.history, this.state)
  }

  render() {

      return(
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>

          <label>Username</label>
          <input
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}
            /><br/>

          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>

          <input type='submit'/>
        </form>
      )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: (history, userInfo) => dispatch(userLoginFetch(history, userInfo))
})


export default connect(null, mapDispatchToProps)(Login);
