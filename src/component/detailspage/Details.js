import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const detail = useLoaderData();
    const { name, id, duration, price, img, describtion } = detail;
    return (
        <div>
            <h1 className='mt-10 mb-6 text-3xl font-bold text-center'>Here you can know details about this course</h1>
            <hr />
            <div className="mt-20 shadow-xl md:mx-20 card lg:card-side bg-base-100">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <p className='text-2xl font-bold'>{name}</p>
                    <p className='text-xl'><span className='font-bold'>$</span>{price}</p>
                    <p className='text-xl'>Duration of this course : <span className='font-bold'>{duration} month</span></p>
                    <p className='text-xl'>{describtion}</p>
                    <div className="justify-end card-actions">
                        <Link to={`/checkout/${id}`}><button className="btn btn-info btn-outline px-9">Get premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;