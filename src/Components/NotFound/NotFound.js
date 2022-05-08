import React from 'react';
import notFound from '../../images/notfound.png';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1>The page you search is not found</h1>
            <img className='w-50' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;