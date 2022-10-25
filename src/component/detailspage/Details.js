import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detail = useLoaderData();
    const { name, id, duration, price, img } = detail;
    return (
        <div>
            <h1 className='mt-10 mb-6 text-3xl font-bold text-center'>Here you can know details about this course</h1>
            <hr />
            <div className="mt-20 shadow-xl md:mx-20 card lg:card-side bg-base-100">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <p className='text-xl'>{name}</p>
                    <p>${price}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-info btn-outline px-9">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;