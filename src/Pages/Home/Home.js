import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Parts from './Parts';
import Portfolio from './Portfolio';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <BusinessSummary/>
            <Review/>
            <Contact/>
           
            <Portfolio/>
        </div>
    );
};

export default Home;