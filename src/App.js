import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.scss';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sing-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

// we want to store info on whether or not a user is logged in. 
// So we need state, which means changing comp into a class comp

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    // we're using this method more than once so we can de-structure it
    const { setCurrentUser } = this.props;

    // we use a method from the auth library
    // take function as param, and its param is the user state
    // then is sets ours state with that status

    // this is now an API request and so is async
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // for details on how this works, see video #91
        userRef.onSnapshot(snapShot => { 
          // we can replace setState with our action and pass it the object that we were 
          // previously using to set currentUser
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
      });
    }
      // if userAuth is null, then set currentUser to null
      setCurrentUser(userAuth);
      // this is an open subscription - always checking status even though it's only called ONCE
      //  and therefore needs to be closed  when the component is unmounted
      // we can do this by calling it again in another lifecycle method
    });
  }   // end componetDidMount function

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        {/* Instead of rendering the component, we render the Route */}
        {/* Route will then point to the component which will be a page */}
        {/* we wrap all the Route components in <Switch> so that only one will show at a time */}
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          {/* <Route path='/signin' component={SignInAndSignUpPage} /> 
              Instead of using above line, we'll replace it with the following 
              where render replaces component.
              render() takes in some JS instead of just a component 
              this way we can make 'Route' conditionally point to Redirect (from react-router-dom)
              or to the singin/up comp page depending on whether the 
              currentUser is signed in or not (curentUser is true or false) */}
              <Route 
                exact 
                path='/signin' 
                render={() => 
                  this.props.currentUser ? (
                    <Redirect to='/' />
                  ) :
                  (<SignInAndSignUpPage />)
                }
              />
          
          
        </Switch>
      
      </div>
    )
  }
  
}

const mapStateToProps = ({ user }) => ({    // { user } is de-structuring user from state
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
})
// dipatch() takes whatever is passed into it and knows that it's an action
//  and sends it to every reducer


export default connect(mapStateToProps, mapDispatchToProps)(App);
