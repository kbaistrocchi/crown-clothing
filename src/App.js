import React from 'react';
import { Switch, Route } from 'react-router-dom';


import './App.scss';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sing-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// we want to store info on whether or not a user is logged in. 
// So we need state, which means changing comp into a class comp

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // we use a method from the auth library
    // take function as param, and its param is the user state
    // then is sets ours state with that status

    // this is now an API request and so is async
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // for details on how this works, see video #91
        userRef.onSnapshot(snapShot => { 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log('this.state', this.state))
        });
      }
      // if userAuth is null, then set currentUser to null
      this.setState({ currentUser: userAuth });
      // this is an open subscription - always checking status even though it's only called ONCE
      //  and therefore needs to be closed  when the component is unmounted
      // we can do this by calling it again in another lifecycle method
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* Instead of rendering the component, we render the Route */}
        {/* Route will then point to the component which will be a page */}
        {/* we wrap all the Route components in <Switch> so that only one will show at a time */}
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          {/* Route provides access to 3 important properties:  match, history and location
              BUT, only to its FIRST child, not to their children
              In this case, Homepage and HatsPage, but not MenuItem or Directory, etc
              In order for 'grandchildren' to get these props, we can use the 
              withRouter from react-router-dom on the grandchild component
          */}
        </Switch>
      
      </div>
    )
  }
  
}

export default App;
