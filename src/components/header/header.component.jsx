import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown-logo.svg';

import { HeaderContainer, 
        LogoContainer, 
        OptionsContainer , 
        OptionLink 
        // OptionDiv
    } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        {/* the logo needs to link to homepage so we need Link from react-router-dom */}
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            
            {/* conditionally render Sign In or Sign Out */}
            {
                currentUser ?
                // if currentUser is an option then we provide a clickable option to sign out
                // using the auth built-in method signout()
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink> :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            
            <CartIcon />
        </OptionsContainer> 
        {/* Conditionally display cartDropdown */}
        {
            hidden ? null :
            <CartDropdown />
        }
    </HeaderContainer>
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