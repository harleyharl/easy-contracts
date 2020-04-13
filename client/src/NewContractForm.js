import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewContractFetch } from './actions/actions.js';

class NewContractForm extends Component {
  state = {
    project_name: "",
    contract_name: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createNewContractFetch(this.props.history, this.state)
  }

  render() {

      return(
        <form onSubmit={this.handleSubmit}>
          <h1>Create a New Contract</h1>

          <label>Project Name</label>
          <input
            name='project_name'
            placeholder='Project Name'
            value={this.state.project_name}
            onChange={this.handleChange}
            /><br/>

          <label>Contract Name</label>
          <input
            name='contract_name'
            placeholder='Contract Name'
            value={this.state.contract_name}
            onChange={this.handleChange}
            /><br/>

          <input type='submit'/>
        </form>
      )
  }
}

const mapDispatchToProps = dispatch => ({
  createNewContractFetch: (history, contractInfo) => dispatch(createNewContractFetch(history))
})


export default connect(null, mapDispatchToProps)(NewContractForm);
