import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.gif'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div>
                 <img src={img} alt="" />
            </div>
           <Link to="/home"><button>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;