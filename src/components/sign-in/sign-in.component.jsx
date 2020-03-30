import React from 'react';

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
}

export default SignIn;