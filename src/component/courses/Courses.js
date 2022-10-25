import React from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../course/Course';
import './courses.css'
const Courses = () => {

    const allCourse = useLoaderData();

    return (
        <div className='grid grid-cols-4'>
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