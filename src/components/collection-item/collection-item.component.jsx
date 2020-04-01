import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

// Because we need access to the entire item, we modified how it was
// passed in from CollectionPreview and we need to rewrite some stuff

// const CollectionItem = ({ id, name, price, imageUrl, addItem })=> (
    // We refactor the line above to adjust for change in props from parent, 
    // now being passed as 'item' rather than individual pieces. We now 
    // wrap the entire component in {} which let's it know that multiple
    // pieces of JS will be within (explicity return of the function)

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
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

            <CustomButton inverted onClick={() => addItem(item)}>
                Add to cart
            </CustomButton>
            {/* We can style only these CustomButtons not only by passing props to be
                classNames, but also by nesting the comp's className ('custom-button')
                under it's parent div, as usually in Sass  */}

        </div>
    )
}
    
    


// whenever there's an addItem above, get the addItem function and pass in the item as the payload 
// so once mapDispatchtoProps is defines we'll have access to the addItem property (as a prop)
// and therefore need to pass it into the functional component (as a prop)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);