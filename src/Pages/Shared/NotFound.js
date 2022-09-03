import React from 'react';
// import notFound from '../../assets/images/notfound.jpg';

const NotFound = () => {
    return (
        <div className='text-center mt-5 text-red-700 font-bold mb-5 text-3xl'>
            <h2>The page you are looking for is not found!!</h2>
            <h5>Error 404</h5>
            {/* <img src={notFound} alt="404" /> */}
        </div>
    );
};

export default NotFound;