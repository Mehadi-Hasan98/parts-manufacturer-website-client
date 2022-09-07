import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const Purchase = () => {

    const [newData, setNewData] = useState(false);
    const [stockNumber, setStockNumber] = useState({quantity: ""});

    let name, value;
    const getUserData = (e) => {
      name = e.target.name;
      value = e.target.value;
      setStockNumber({ ...stockNumber, [name]: value });
      e.preventDefault(); 
    };

     // update data
     const handleUpdate = async (id, stock) => { 
        const {quantity} = stockNumber;
        toast('Stock updated');
        console.log(stock)
        const getQuantity = parseInt(quantity) + parseInt(stock);
       console.log(getQuantity);
        const newQuantity = {
          stock: getQuantity.toString(),
        };
     
        
    
        // send data to the monogodb server and update
        const url = `https://quiet-garden-90243.herokuapp.com/product/${id}`
        await axios.put(url, newQuantity).then((response) => {
          const { data } = response;
          if (data) {
            setNewData(!newData);
            window.location.reload(false);
          }
        });
       
      };

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

  const onSubmitFrom = data => {
    const url = `https://quiet-garden-90243.herokuapp.com/order`;
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
        reset();
    })
      
   
}

    const {id} = useParams();
    const [products, setProducts] = useState([]);
   

  useEffect( () => {
    fetch(`https://quiet-garden-90243.herokuapp.com/product/${id}`)
    .then(res => res.json())
    .then(data => setProducts(data))
}, [id]);

    return (
        <div className="md:px-28 mb-20 mt-16 font-mono">
        <div>
       <h2 className="text-2xl text-center mb-10 font-semibold text-zinc-800">Product Details</h2>
       </div>
        <div className="flex flex-row">
      <div style={{ height: "600px" }} className="card ml-10 mr-48 w-96 bg-base-200 shadow-xl">
        <figure>
          <img
            style={{ height: "200px" }}
            src={products.img}
            alt="tools"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center font-mono">
          <h2 className="card-title">{products.name}</h2>
          <h6>Price: ${products.price}</h6>
          <h6>Available Stock: {products.stock}</h6>
          <h6>Minimum Order: {products.order}</h6>
          <p>{products.description}</p>
          
          <div>
          <input className='rounded-lg py-2 px-4 mb-2 outline' type="number" id='stock' name='quantity' placeholder='Enter Quantity Number' value={stockNumber.stock} onChange={getUserData}/>
          </div>
          
          <div className="flex">
          <button onClick={() => handleUpdate(products._id, products.stock)} className="py-2 mr-2  px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono">Increase</button>
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
            {...register("name")}
          />
          <input
            className="w-80 rounded  border-2 outline mb-5 py-4 px-10" readOnly
            value={user.email}
            {...register("email", { required: true })}
          />
          <input
            className="w-80 rounded border-2 outline mb-5 py-4 px-10"
            placeholder="Product Name"
            value={products.displayName}
            {...register("productName")}
          />
          <input
            className="w-80 rounded border-2 outline mb-5 py-4 px-10"
            placeholder="price"
            // value={products.price}
            {...register("price")}
          />
          <div>
          <p className='mb-2 w-full text-red-500'> {errors.order?.type === 'required' && "Quantity is required*"}</p>
                        <p className='mb-2 w-full text-red-500'> {errors.order?.type === 'min' && "Enter Minimum Quantity"}</p>
                        <p className='mb-2 w-full text-red-500'> {errors.order?.type === 'max' && "Enter less than available stock"}</p>
                        <input
            className="w-80 rounded border-2 outline mb-5 py-4 px-10"
            placeholder={"Minimum order " + products.order}
            // value={products.order}
            {...register("order", { required: true, min: products.order, max: products.stock })}
          />
          </div>
          
          <div>
          <p className='mb-3 text-red-500'> {errors.address?.type === 'required' && "Address is required*"}</p>
          <input
            className="w-80 rounded border-2 border-solid outline mb-5 py-4 px-10"
            placeholder="Your Address"
            type="text"
            {...register("address")}
          />
            </div>
         
          <input
            className="w-80 rounded border-2 outline mb-5 py-4 px-10"
            placeholder="Phone Number"
            type="number"
            {...register("phone number")}
          />
          <input
            className="py-2 px-4 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono"
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