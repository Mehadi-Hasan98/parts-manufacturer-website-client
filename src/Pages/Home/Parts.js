import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

import { useNavigate } from 'react-router-dom';

const Parts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    if(!loading){
        <Loading/>
    }
    else{
        setLoading(false);
    }
     
    useEffect( () => {
        fetch('parts.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`);
    }
   
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mb-2 mt-20 font-mono'>Parts</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 mt-4 font-mono gap-4'>
          
          {
            products.slice(0, 6).map(product => <div
            key={product.id}
            product={product}
            >
                <div style={{height: "570px"}} className="card w-80 bg-base-200 mt-10 mx-auto shadow-xl">
  <figure className="px-10 pt-10">
    <img style={{height: "200px"}} src={product.img} alt="tools" className="rounded-xl w-full" />
  </figure> 
  <div className="card-body items-center text-center font-mono">
    <h2 className="card-title">{product.name}</h2>
    <h6>Price: ${product.price}</h6>
    <h6>Stock: {product.stock}</h6>
    <h6>Min Order: {product.order}</h6>
    <p>Description: {product.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={ () => handlePurchase(product.id)}>Purchase</button>
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