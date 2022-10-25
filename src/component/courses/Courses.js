import React from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../course/Course';
import Sidebar from '../sidebar/Sidebar';
import './courses.css'
const Courses = () => {

    const allCourse = useLoaderData();
    return (
        <div className='grid grid-cols-4'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="grid md:col-span-3 course ">
                <div className='grid grid-cols-3 gap-1'>
                    {
                        allCourse.map(course => <Course course={course} key={course.id}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;