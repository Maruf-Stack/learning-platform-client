import React from 'react';

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
                        <div className="badge badge-outline">Show details</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;