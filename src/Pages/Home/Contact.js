import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
      } = useForm();

      const onSubmit = async (data) => {
        toast('Send Successfully');
        reset();
      };

    return (
        <div>
            <h1 className='text-3xl text-center font-bold font-mono mt-24 mb-8'>Contact Us</h1>
            <div className='flex justify-center  items-center mb-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              {/* <label className="label">
                <span className="label-text">Subject</span>
              </label> */}
              <input
              type="text"
            className="w-72 rounded border-2 outline mb-4 py-3 px-2"
            placeholder="Subject"
          />
              <input
              type="name"
            className="w-72 rounded border-2 outline mb-4 py-3 px-2"
            placeholder="Your Name"
           
            {...register("name", { required: true })}
          />
              <input
                type="email"
                placeholder="Your Email"
                className="w-72 rounded border-2 outline mb-4 py-3 px-2"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <textarea
               type="textarea"
               placeholder="Message"
              className='outline mt-3 rounded px-2'></textarea>
              
            </div>
           <br/>
            <input
              className="py-2 mb-20 px-20 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 font-mono"
              type="submit"
              value="Send"
            />
          </form>
            </div>
        </div>
    );
};

export default Contact;