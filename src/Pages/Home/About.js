import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10 mb-16 font-mono'>About Us</h1>
            <div className='grid grid-cols-2 mx-10 mb-14'>
                <img className='rounded-box' src="https://i.ibb.co/JRDzD0Q/blog.jpg" alt='about'></img>
                <p className='text-xl ml-10 mt-8'>A single car has about 30,000 parts, counting every part down to the smallest screws - Toyota <br/>
                In 2017, a total of 272.48 million vehicles were registered in the U.S.  Each of these vehicles requires a vast number of parts to function and operate.  With over 30,000 parts found in a single car, motor vehicle manufacturers rely on key suppliers to assist in bringing these parts to market and to manufacturing assembly lines.
                </p>
            </div>
           
        </div>
    );
};

export default About;