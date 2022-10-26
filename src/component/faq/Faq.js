import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="que p-10 lg:mx-36">
                <p className='text-2xl font-bold text-red-800'>
                    1. Is there any support session of this course?
                </p>
                <p className='mt-2 ml-4 font-thin'>= Yes,when you fall in a problem related our courses our team suppor is always open</p>
            </div>
            <div className="que p-10 lg:mx-36">
                <p className='text-2xl font-bold text-red-800'>
                    2. Is there any certificate I will get end of the course ?
                </p>
                <p className='mt-2 ml-4 font-thin'>= Of course,if you complete our course we will provide you a certificate.</p>
            </div>
            <div className="que p-10 lg:mx-36">
                <p className='text-2xl font-bold text-red-800'>
                    3.How much cost of these course ?
                </p>
                <p className='mt-2 ml-4 font-thin'>= In detail of every course page you can see the price of these courses.</p>
            </div>
            <p className='lg:text-3xl text-2xl mb-14 text-center font-bold text-blue-800 text-[popins]'>Thank you so much of visiting us</p>
        </div>
    );
};

export default Faq;