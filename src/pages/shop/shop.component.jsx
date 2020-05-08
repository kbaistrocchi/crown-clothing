import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
class ShopPage extends React.Component {

    // whenever using a subscription function, we need to remember to unsubscribe as well
    unsubscribeFromSnapshot = null; 

    componentDidMount() {
        // we need to fetch the snapshot of collections array
        const collectionRef = firestore.collection('collections');

        // onSnapshot -> whenever the collectionRef updates or this component mounts
        //              we GET the data. It's a never-ending stream, which is why
        //              we need to unsubscribe.

    collectionRef.onSnapshot(async snapshot => {
        console.log('snapshot', snapshot);
        // in order to shape the data the way we want and add info we may need in this
        // particular web app, we will write a function in firebase.utils.js
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(collectionsMap);
    })
    }


    render() {
        // the 'match' props is passed down from Route, which ShopPage is nested within
        const { match } = this.props;
        return(
            <div className='shop-page'> 
                {/* we want the CollectionsOverview to display the 
                current path that we're on (i.e /shop) because the component 
                doesn't link to a new page.
                So we use string interpolation to get property off the props
                that's passed from Route of ShopPage */}
                <Route exact path={`${match.path}`} component={CollectionsOverview} /> 
        
                {/* now we nest our Route. Our path uses the ':' to create a chains 
                    parameter called collectionId (or whatever we want) and then gives it
                    the value of whatever is typed (ex shop/couldBeAnything)  */}
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    } 
} 



export default ShopPage;