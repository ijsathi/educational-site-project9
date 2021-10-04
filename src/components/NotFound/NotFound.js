import React from 'react';
import img from '../../images/404.gif'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;