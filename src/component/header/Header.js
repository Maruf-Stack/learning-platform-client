import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className='flex items-center justify-around'>
            <div className='flex items-center h-auto title'>
                <img src="https://media.istockphoto.com/vectors/online-education-concept-line-icons-internet-learning-courses-distant-vector-id914519732?k=20&m=914519732&s=612x612&w=0&h=L_kl7uysq7s8m2V_nqQJye7s9oTxUUXoPV8McpSPRzw=" alt="" className='w-24' />
                <p>Expert in Technology</p>

            </div>
            <div className='nav'>
                <Link className='mx-4'>Home</Link>
                <Link className='mx-4'>Course</Link>
                <Link className='mx-4'>Details</Link>
                <Link className='mx-4'>Contact</Link>
            </div>
        </div>
    );
};

export default Header;