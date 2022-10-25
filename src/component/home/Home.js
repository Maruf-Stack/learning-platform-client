import React from 'react';
import './home.css'
import cover from '../../asset/cover.png'
const Home = () => {
    return (
        <div className='grid mx-40 mt-20 lg:grid-cols-2'>
            <div className='banner-title mt-14'>
                <h1 className='mb-12 text-5xl font-semibold font-[popins]'>Welcome to our,,,<br></br> <span className='title-name'>Expert-Technology</span></h1>
                <div>
                    <p className='font-medium des text-x'>If you want to be a expert Web developer,graficks desingner,programmer <br></br>this course is for you.In our all course we will teach you every<br></br> course from basic to advance.Enroll for growing up your <br></br>skill and be a IT expert.</p>
                    <button className=' btn-courses'>View our courses</button>
                </div>

            </div>
            <div className='banner'>
                <img className='w-full h-full' src={cover} alt="banner" />
            </div>
        </div>
    );
};

export default Home;