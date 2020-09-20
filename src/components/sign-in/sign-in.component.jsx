import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
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
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            label='email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            label='password'
            handleChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
        </form>
      </div>
    )
  }

};

export default SignIn;
