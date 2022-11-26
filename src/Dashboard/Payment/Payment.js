import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking=useLoaderData();
    console.log('payment ----',booking)
    const {name,price,location}=booking;
    return (
        <div>
            <h1>payment for {name}</h1>
            <p className='text-xl'>Please pay <strong>$ {price} </strong> for your product. Meeting location{location}.</p>
        </div>
    );
};

export default Payment;