import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../course/Course';

const Courses = () => {

    const allCourse = useLoaderData();

    return (
        <div>
            <div className="sidebar">
                <p>this is sidebar</p>
            </div>
            <div className="course">
                {
                    allCourse.map(course => <Course course={course} key={course.id}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;