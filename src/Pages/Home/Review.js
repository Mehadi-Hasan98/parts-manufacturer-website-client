import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const reverse = [...reviews].reverse();
    useEffect(() => {
      fetch("review.json")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-16 mb-10'>Customer Review</h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:px-24">
        {reverse.map((review) => (
          <div key={review.id}>
            <div style={{height: "430px"}} className="card mx-auto w-80 bg-base-100 shadow-xl mt-12 font-mono">
              <figure>
                <img
                  src={review.img}
                  alt="Review"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {review.name}</h2>
                <p>Review: {review.description}</p>
                <p>Country: {review.address}</p>
                <p>Rating: {review.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Review;