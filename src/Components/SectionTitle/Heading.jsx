import React from 'react';

const Heading = ({headding,subHeading}) => {
    return (
        <div className='w-4/12 mx-auto my-7 text-center text-2xl'>
            <p className='mb-2 text-yellow-600'>-- {subHeading} --</p>
            <h2 className='border-y-4 py-4 text-4xl uppercase'>{headding}</h2>
        </div>
    );
};

export default Heading;