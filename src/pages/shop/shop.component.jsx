import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
// In order to use WithSpinner, a HOC, we will place it where we would normally
// place the component that it takes in as an argument
// on the ShopPage, that will be the <Route>s. 
// So we creat a new component = to the return of the HOC
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    // if we don't need constructor we can just declare a sate
    //  we need this state for the WithSpinner HOC
    state = {
        loading: true
    };

    // whenever using a subscription function, we need to remember to unsubscribe as well
    unsubscribeFromSnapshot = null; 

    componentDidMount() {
        const { updateCollections } = this.props;

        // we need to fetch the snapshot of collections array
        const collectionRef = firestore.collection('collections');

        // onSnapshot -> whenever the collectionRef updates or this component mounts
        //              we GET the data. It's a never-ending stream, which is why
        //              we need to unsubscribe.

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            console.log('snapshot', snapshot);
            // in order to shape the data the way we want and add info we may need in this
            // particular web app, we will write a function in firebase.utils.js
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log(collectionsMap);
            updateCollections(collectionsMap);
            // after the updateCollections is called we know that
            // the app must have the data and therefore is no longer loading
            // so we can change the loading state 
            this.setState({ loading: false });
    })
    }


    render() {
        // the 'match' props is passed down from Route, which ShopPage is nested within
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className='shop-page'> 
                {/* we want the CollectionsOverview to display the 
                current path that we're on (i.e /shop) because the component 
                doesn't link to a new page.
                So we use string interpolation to get property off the props
                that's passed from Route of ShopPage */}
                {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
                 instead of using component as in above line, we use render
                    which takes in arguments which are then passes as the props to 
                    the component that it's rendering */}
                    <Route
                        exact
                        path={`${match.path}`}
                        render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} 
                    />
        
                {/* now we nest our Route. Our path uses the ':' to create a chains 
                    parameter called collectionId (or whatever we want) and then gives it
                    the value of whatever is typed (ex shop/couldBeAnything)  */}
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}

                />
            </div>
        );
    } 
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})



export default connect(null, mapDispatchToProps)(ShopPage);