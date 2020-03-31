import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
  
import { auth, createUsrProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and a password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label='Email'
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={password}
                    label='Confirm Password'
                    onChange={this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;