import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const details = useLoaderData()
    const { id, name } = details;
    return (
        <div>
            <p className='lg:mx-40 mx-5 font-bold text-2xl'>This course is about <span className='text-3xl text-sky-600'>{name}</span>.You can get best service from our course.Enroll now</p>
        </div>
    );
};

export default Checkout;