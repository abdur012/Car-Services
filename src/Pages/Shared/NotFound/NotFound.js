import React from 'react';
import error from '../../../images/error.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>404</h1>
            <img className='w-100' src={error} alt="" />
        </div>
    );
};

export default NotFound;






