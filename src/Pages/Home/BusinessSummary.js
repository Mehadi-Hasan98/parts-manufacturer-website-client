import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-3xl ml-4 text-center font-bold font-mono mt-32 mb-20'>Business Summary</h1>

            <div className="stats shadow grid sm:grid-cols-1 md:grid-cols-3">
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Monthly product Sale</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Yearly Revenue</div>
    <div className="stat-value text-secondary">$1.6M</div>
    <div className="stat-desc">21% more than last year</div>
  </div>
  
  <div className="stat">
    <div className="stat-value">46%</div>
    <div className="stat-title">Customer increase</div>
    <div className="stat-desc text-secondary">more than previous year</div>
  </div>
  
</div>
        </div>
    );
};

export default BusinessSummary;