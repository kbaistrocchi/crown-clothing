import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl, addItem })=> (
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>

        <CustomButton inverted>Add to cart</CustomButton>
        {/* We can style only these CustomButtons not only by passing props to be
             classNames, but also by nesting the comp's className ('custom-button')
             under it's parent div, as usually in Sass  */}

        
    </div>
)

// whenever there's an addItem above, get the addItem function and pass in the item as the payload 
// so once mapDispatchtoProps is defines we'll have access to the addItem property (as a prop)
// and therefore need to pass it into the functional component (as a prop)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);