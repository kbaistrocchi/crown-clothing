import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'email': '',
            'password': ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password }= this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({'email': '', 'password': ''});
        } catch (error) {
            console.log(error)
        }
    };



    handleChange = (e) => {
        // deconstruct to pull value and name off of e.target
        const { value, name } = e.target;
        // then, dynamically setState using those vars (ex: name will be either 'email' or 'password')
            // I think the [] are used in case it contains a space - it's safer
        this.setState({ [name]: value });
        // this allows us to pass the same function into both inputs below
    };
 
    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
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

                    <div className='buttons'>
                        <CustomButton type='submit' >
                            Sign In
                        </ CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            {/* we can write isGoogleSignIn=true or just leave it alone
                                as they are the same */}
                            Sign In with Google
                        </ CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;