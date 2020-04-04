import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown-logo.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        {/* the logo needs to link to homepage so we need Link from react-router-dom */}
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            
            {/* conditionally render Sign In or Sign Out */}
            {
                currentUser ?
                // if currentUser is an option then we provide a clickable option to sign out
                // using the auth built-in method signout()
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div> :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            
            <CartIcon />
        </div> 
        {/* Conditionally display cartDropdown */}
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
)

// this function will return an object with the property we want (can name it whatever)
//  and its value will be from the state found in the root reducer

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })
//      ||
//      \/
// 
// we can refactor above mapStateToProps for the new cart state, hidden.
// to do this, we de-structure the state argument, but user and cart are nested so 
// it looks like this:
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
//     currentUser,
//     hidden
// })
// Using selectors, we can refactor this again
//      ||
//      \/
// 
// we can use createStructuredSelector() to pass state into each of it's properties
// this save writing (state) in each property if there are a lot.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);