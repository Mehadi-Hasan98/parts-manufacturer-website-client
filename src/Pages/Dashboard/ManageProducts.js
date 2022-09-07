import React, { useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import useManageProducts from '../hooks/useManageProducts';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [products] = useManageProducts();
    const [loading, setLoading] = useState(true);
    if(!loading){
      <Loading></Loading>
    }
    else{
      setLoading(false);
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-mono mt-10 font-bold text-zinc-800 mb-4'>All Products</h2>
            <div className='grid grid-cols-2'>
                {
                    products.map(product => <AllProducts
                    key={product._id}
                    product={product}
                    ></AllProducts>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;