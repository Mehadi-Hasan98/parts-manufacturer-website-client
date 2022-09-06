import React from 'react';
import useManageProducts from '../hooks/useManageProducts';

const AllProducts = ({product}) => {

    const [products, setProducts] = useManageProducts();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure?");
        if (proceed) {
          const url = `http://localhost:5000/product/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              const remaining = products.filter((product) => product._id !== id);
              setProducts(remaining);
            });
        }
      };
    return (
        <div className="grid md:px-20">
        <div
          style={{ height: "550px" }}
          className="card w-80 bg-base-200 mt-10 mb-16 shadow-xl"
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
                className="btn btn-primary"
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