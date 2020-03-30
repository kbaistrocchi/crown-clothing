import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'email': '',
            'password': ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({'email': '', 'password': ''});
    }

    handleChange = (e) => {
        // deconstruct to pull value and name off of e.target
        const { value, name } = e.target;
        // then, dynamically setState using those vars (ex: name will be either 'email' or 'password')
            // I think the [] are used in case it contains a space - it's safer
        this.setState({ [name]: value });
        // this allows us to pass the same function into both inputs below
    }
 
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required 
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required 
                    />

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;