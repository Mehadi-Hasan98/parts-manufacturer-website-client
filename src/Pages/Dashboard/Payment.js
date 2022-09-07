import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1vFzL3PNLJowQNhsFLqJvEohTo2QfIVCyvyBWFWQ1bzoSnTNsYjA4v6x7X21m8YnIR7dwzVgJg0bx8K2VGGVeZ00fwZEtMBl');

const Payment = () => {
    const [user] = useAuthState(auth);
    const {id} = useParams();
    const url = `https://quiet-garden-90243.herokuapp.com/order/${id}`;

    const { data: myorder , isLoading } = useQuery('order', () => fetch(url, {
        method: 'GET',
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
            <p className="text-zinc-800 font-semibold">Hello, <span className='text-blue-500 font-bold'>{user? user.displayName : ''}</span> </p>
            <h2 className="card-title mx-auto">Please Pay for: <span className='text-red-700 font-bold'>{myorder.productName}</span></h2>
            
            <p className='font-semibold'>Please pay:  $ {myorder.price}</p>
        </div>
    </div>
    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
        
            <Elements stripe={stripePromise}>
            <CheckoutForm  myorder={myorder}/>
            </Elements>
        </div>
    </div>
    </div>
    );
};

export default Payment;