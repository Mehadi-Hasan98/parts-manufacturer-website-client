import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

import { useNavigate } from 'react-router-dom';

const Parts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const reverse = [...products].reverse();
    const navigate = useNavigate();

    if(!loading){
        <Loading/>
    }
    else{
        setLoading(false);
    }
     
    useEffect( () => {
        fetch('https://quiet-garden-90243.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`);
    }
   
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mb-2 mt-20 font-mono'>Latest Parts</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 mt-4 font-mono gap-4'>
          
          {
            reverse.slice(0, 9).map(product => <div
            key={product.id}
            product={product}
            >
                <div style={{height: "470px"}} className="card w-80 bg-base-200 mt-10 mx-auto shadow-xl">
  <figure>
    <img  style={{height: "150px"}} src={product.img} alt="tools" className="rounded-xl w-full" />
  </figure> 
  <div className="card-body items-center text-center font-mono">
    <h2 className="card-title">{product.name}</h2>
    <h6>Price: ${product.price}</h6>
    <h6>Available Stock: {product.stock}</h6>
    <h6>Minimum Order: {product.order}</h6>
    <p>Description: {product.description}</p>
    <div className="card-actions">
      <button className="py-2 mb-20 mt-8 px-8 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono" onClick={ () => handlePurchase(product._id)}>Purchase</button>
    </div>
  </div>
</div>
            </div>)
          }
            </div>
        </div>
    );
};

export default Parts;