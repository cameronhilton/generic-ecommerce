import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = e => {
    e.prevetDefault();

    this.setState(() => ({
      email: '',
      password: '',
    }));
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value,
    }))
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your username and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    )
  }

};

export default SignIn;