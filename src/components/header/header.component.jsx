import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown-logo.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        {/* the logo needs to link to homepage so we need Link from react-router-dom */}
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
            {/* conditionally render Sign In or Sign Out */}
            {
                currentUser ?
                // if currentUser is an option then we provide a clickable option to sign out
                // using the auth built-in method signout()
                <div className='option' onClick={() => auth.signOut()}>
                    Sign Out
                </div> :
                <Link className='option' to='/signin'>
                    Sign In
                </Link>
            }
        </div>
    </div>
)

export default Header;