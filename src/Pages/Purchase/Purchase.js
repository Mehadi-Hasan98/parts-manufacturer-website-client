import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const Purchase = () => {

    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

  const onSubmitFrom = data => {
    const url = `/order`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    .then(res=> res.json())
    .then(result => {
        console.log(result)
        toast("Order added successfully");
    })
      
    reset();
}


    const [products, setProducts] = useState([]);
    const {id} = useParams();

  useEffect( () => {
    fetch(`parts.json/product/${id}`)
    .then(res => res.json())
    .then(data => setProducts(data))
}, [id]);

    return (
        <div className="md:px-28 mb-20 mt-16 font-mono">
        <div>
       <h2 className="text-2xl text-center mb-10 font-semibold text-zinc-800">Product Details</h2>
       </div>
        <div className="flex flex-row">
      <div style={{ height: "600px" }} className="card ml-10 mr-48 w-80 bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            style={{ height: "150px" }}
            src={products.img}
            alt="tools"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center font-mono">
          <h2 className="card-title">{products.name}</h2>
          <h6>Price: ${products.price}</h6>
          <h6>Stock: {products.stock}</h6>
          <h6>Min Order: {products.order}</h6>
          <p>{products.description}</p>
          <input className="rounded-lg py-2 px-4 outline mb-3" type="number" name="Minimum Quantity" placeholder="Enter Update Quantity"/>
          <div className="flex">
          <button className="py-2 mr-2  px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Increase</button>
          <button className="py-2 ml-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Decrease</button>
          </div>
        </div>
      </div>
      <div className='flex h-screen justify-center items-center'>
      <form
          className="flex flex-col w-48 mt-10 form"
          onSubmit={handleSubmit(onSubmitFrom)}
        >
          <input
            className="w-80 rounded border-2 outline mb-5 py-4 px-10"
            placeholder="Name"
            value={user.displayName}
            {...register("name", { required: true })}
          />
          <input
            className="w-80 rounded  border-2 outline mb-5 py-4 px-10" readOnly
            value={user.email}
            {...register("email", { required: true })}
          />
          <input
            className="w-80 rounded border-2 outline mb-5 py-4 px-10"
            placeholder="Product Name"
            value={products.name}
            {...register("productName", { required: true })}
          />
          <input
            className="w-80 rounded border-2 outline mb-5 py-4 px-10"
            placeholder="Price"
            value={products.price}
            {...register("price", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-solid outline mb-5 py-4 px-10"
            placeholder="Your Address"
            type="text"
            {...register("address", { required: true })}
          />
          <input
            className="w-80 rounded border-2 outline mb-5 py-4 px-10"
            placeholder="Phone Number"
            type="number"
            {...register("phone number", { required: true })}
          />
          <input
            className="py-2 ml-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono"
            type="Submit"
            value="CONFIRM ORDER"
          />
        </form>
      </div>
    </div>
    </div>
    );
};

export default Purchase;