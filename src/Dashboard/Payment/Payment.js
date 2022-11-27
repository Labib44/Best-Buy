import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// 
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    // console.log('payment ----', booking)
    const navigation = useNavigation();

    const { name, price, location } = booking;

    if (navigation.state === "loading") {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }
    return (
        <div>
            <h1>payment for {name}</h1>
            <p className='text-xl'>Please pay <strong>$ {price} </strong> for your product. Meeting location{location}.</p>


            <div className="card mt-20 w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            booking={booking}
                        >

                        </CheckOutForm>
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;