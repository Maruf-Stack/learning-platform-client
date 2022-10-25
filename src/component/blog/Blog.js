import React from 'react';
import './blog.css'
const Blog = () => {
    return (
        <div>
            <div className="p-8 mx-8 mb-4 rounded que">
                <h1 className='mb-2 font-semibold text-'><span className='text-2xl font-bold'>Que 1 :</span>What is cors?</h1>
                <p className='font-semibold'><span className='text-2xl font-bold'>Ans : </span>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources</p>

            </div>
            <hr></hr>
            <div className="p-8 mx-8 mb-4 rounded que">
                <h1 className='mb-2 font-semibold text-'><span className='text-2xl font-bold'>Que 2 :</span>Why Im using firebase ? What other option to implement authentication?</h1>
                <p className='font-semibold'><span className='text-2xl font-bold'>Ans : </span>
                    I use firebase for authentication system of my website.<br></br>
                    Other options are</p>
            </div>
            <hr />
            <div className="p-8 mx-8 mb-4 rounded que">
                <h1 className='mb-2 font-semibold text-'><span className='text-2xl font-bold'>Que 3 :</span>How does private route work?</h1>
                <p className='font-semibold'><span className='text-2xl font-bold'>Ans : </span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <hr />
            <div className="p-8 mx-8 mb-4 rounded que">
                <h1 className='mb-2 font-semibold text-'><span className='text-2xl font-bold'>Que 4 :</span>What is node ? How does node work?</h1>
                <p className='font-semibold'><span className='text-2xl font-bold'>Ans : </span>Node.js is an open source server environment.<br></br>
                    Node.js is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
            <hr />
        </div>
    );
};

export default Blog;