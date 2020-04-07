import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


export const Directory = ({ sections }) => {
        return (
            <div className='directory-menu'>
                {   
                // if the keys and values are exactly the same we can refactor the
                // props with a spread operator 
                // id is passed into 'key' and therefore is explicity declared in props  
                    sections.map(({ id, ...restOfProps}) => (
                        <MenuItem key={id} {...restOfProps} />
                    ))
                }   
            </div>
        )
} 

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
    


export default connect(mapStateToProps)(Directory);