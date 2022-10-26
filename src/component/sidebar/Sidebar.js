import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ course }) => {
    const { name, id, img, price, duration } = course;
    return (
        <div className="flex flex-col mx-10 sidebar">
            <Link to={`/details/${id}`} className="mt-3 mb-2 link link-primary">{name}</Link>
        </div>
    );
};

export default Sidebar;