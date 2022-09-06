import React from 'react';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <Review/>
            <Contact/>
            <About/>
        </div>
    );
};

export default Home;