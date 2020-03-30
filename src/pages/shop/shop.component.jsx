import React from 'react';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        // because the initial state is a large, static array, we can store it in its own
        // file and import it in here
        this.state = {
            collections:  SHOP_DATA
        }
    }
    render() {
        return (
            <div>Shop Page</div>
        )
    }
}

export default ShopPage;