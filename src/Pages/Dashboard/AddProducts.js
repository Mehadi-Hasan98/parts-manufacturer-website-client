import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmitForm = data =>{
        const url = ``;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        .then(res=> res.json())
        .then(inserted => {
          if(inserted.insertedId){
              toast.success('Item added successfully')
              reset();
          }
          else{
              toast.error('Failed to add the item');
          }
      })
      }

    return (
        <div className='font-mono'>
            <h2 className='text-2xl font-mono font-bold text-center text-white mt-16'>Add Products</h2>
            <form
          className="flex flex-col w-80 mx-auto mt-12 mb-12 form"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Product Photo URL"
            type="text"
            {...register("img")}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
          <input
            className="w-80 rounded  border-2 border-primary  mb-5 py-4 px-10"
            value={user.email}
            {...register("email", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Enter Price" type="number"
            {...register("price", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Enter Product Stock" type="number"
            {...register("stock", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Enter Minimum Order" type="number"
            {...register("order", { required: true })}
          />
          <textarea className='w-80 rounded border-2 border-primary  mb-5 py-4 px-10' placeholder='Description' type="text" {...register("description", {required: true})} />
          <input
            className="product-btn rounded bg-primary py-4 text-white text-xl"
            type="Submit"
            value="Add Products"
          />
        </form>
        </div>
    );
};

export default AddProducts;