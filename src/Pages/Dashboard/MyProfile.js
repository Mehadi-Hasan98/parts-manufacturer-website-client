import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [info, setInfo] = useState([]);
    useEffect( () =>{
        const email = user.email;
        fetch(`http://localhost:5000/information/email=${email}`)

        .then(res => res.json())
        .then(data => setInfo(data))
    }, [user])
    console.log(info)

    const onSubmitFrom = data => {
        const url = `http://localhost:5000/information`;
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
            toast("Information added successfully");
        })
          
        reset();
    }
    return (
        <div>
        <h2 className='text-2xl font-semibold text-zinc-800 text-center text-semiBold font-mono mt-10'>My Profile</h2>
        <h1 className='text-xl text-center mt-10 text-gray-800 '>Name: <span className='text-red-800'>{user.displayName}</span></h1>
        <h2 className='text-xl text-center mt-6 text-gray-800'>Email: <span className='text-red-800'>{user.email}</span></h2>
        <h2>{}</h2>

        <form
      className="flex flex-col w-80 mx-auto mt-10 form"
      onSubmit={handleSubmit(onSubmitFrom)}
    >
      <input
        className="w-80 rounded border-2 outline  mb-5 py-4 px-10"
        placeholder="Education"
        type="text"
        {...register("education", { required: true })}
      />
      <input
        className="w-80 rounded border-2 border-solid outline  mb-5 py-4 px-10"
        placeholder="Location"
        type="text"
        {...register("location", { required: true })}
      />
     <input
        className="w-80 rounded border-2 outline  mb-5 py-4 px-10"
        placeholder="Phone Number"
        type="number"
        {...register("phone number", { required: true })}
      />
      <input
        className="w-80 rounded  border-2 outline  mb-5 py-4 px-10"
        value={user.email}
        {...register("email", { required: true })}
      />
      <input
        className="w-80 rounded border-2 outline  mb-5 py-4 px-10"
        placeholder="LinkedIn Profile Link"
        type="text"
        {...register("link")}
      />
      <input
        className="py-2 mb-20 px-6 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono"
        type="Submit"
        value="Add Information"
      />
    </form>
    </div>
    );
};

export default MyProfile;