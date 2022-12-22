import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useEffect, useState } from 'react';
// 


const CheckOutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const { price, name, email, _id } = booking;
    // console.log('check out ',price);


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://best-buy-server-three.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())

            .then((data) => {
                console.log(data);
                setClientSecret(data.clientSecret)

            });
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // save payment info in the database.
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                booking: _id
            }

            fetch('https://best-buy-server-three.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congratulations ! Complited your payment');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="card-actions justify-end">
                    <button className="btn btn-xs btn-primary mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transaction Id:<span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;