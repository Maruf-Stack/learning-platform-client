import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Sidebar = () => {
    const courses = useLoaderData();
    return (
        <div className="flex flex-col mx-10 sidebar">
            <p className='mb-2 text-xl font-semibold'>Courses</p>
            <hr />
            <Link className="mt-3 mb-2 link link-primary">Mern stack</Link>
            <Link className="mb-2 link link-primary">Full stack</Link>
            <Link className="mb-2 link link-primary">Python data science</Link>
            <Link className="mb-2 link link-primary">Echical hacking</Link>
            <Link className="mb-2 link link-primary">Digital marketing</Link>
            <Link className="link link-primary">Graphics design</Link>
        </div>
    );
};

export default Sidebar;