import React from 'react';
import { toast } from 'react-toastify';
import useManageProducts from '../hooks/useManageProducts';

const AllProducts = ({product}) => {

    const [products, setProducts] = useManageProducts();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?");
        if (proceed) {
          const url = `https://quiet-garden-90243.herokuapp.com/product/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = products.filter((product) => product._id !== id);
              toast('Product deleted');
              window.location.reload(false);
              setProducts(remaining);
             
            });
        }
      };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ml-8">
        <div
          style={{ height: "550px" }}
          className="card w-96 bg-base-200 mt-10 mb-16 shadow-xl"
        >
          <figure>
            <img
              style={{ height: "200px" }}
              src={product.img}
              alt="tools"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center font-mono">
            <h2 className="card-title">{product.name}</h2>
            <h6>Price: ${product.price}</h6>
            <h6>Stock: {product.stock}</h6>
            <h6>Min Order: {product.order}</h6>
            <p>Description: {product.description}</p>
            <div className="card-actions">
              <button
                className="py-2 mb-20 mt-8 px-8 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllProducts;