import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// the 'match' props is passed down from Route, which ShopPage is nested in
const ShopPage = ({ match }) => (
    <div className='shop-page'> 
        {/* we want the CollectionsOverview to display the 
        current path that we're on (i.e /shop) because the component 
        doesn't link to a new page.
        So we use string interpolation to get property off the props
        that's passed from Route of ShopPage */}
        <Route exact path={`${match.path}`} component={CollectionsOverview} /> 

        {/* now we nest our Route. Our path will be determined by the 
            component that it handles (in this case, CollectionPage). The ':' chains 
            the parameter (from CollectionPage) onto the path  */}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;