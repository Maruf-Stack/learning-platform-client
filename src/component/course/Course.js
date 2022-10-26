import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, id, img, price, duration } = course;
    return (
        <div>
            <div className="mb-5 shadow-xl card w-80 bg-base-100">
                <figure><img src={img} alt="Shoes" className='h-56' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Course duration : {duration} month</p>
                    <p>Price : ${price}</p>
                    <div className="justify-end card-actions">
                        <Link to={`/details/${id}`}><div className="btn btn-outline btn-info mx-2 my-1">Show details</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;