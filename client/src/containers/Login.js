import React, { Component } from 'react';
import "./Login.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";


class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  // validateForm = (state) => {
  //   return state.email.length > 0 && state.password.length > 0;
  // }

  handleSubmit = event => {
    event.preventDefault();
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className = "Login">
        <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </Form.Group>
          <Button block bsSize="large"  type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }

}

export default Login;
