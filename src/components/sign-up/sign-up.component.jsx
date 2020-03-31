import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
  
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

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

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        
        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            // create a new user from the user input data
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            
            // once new user is created, create a document(i.e. data) for the new user
            await createUserProfileDocument(user, { displayName });
            
            // then reset the state to be empty to clear the form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        })
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
                    value={confirmPassword}
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