import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ bike, setBike }) => {
    const { user } = useContext(AuthContext);
    const { name, price, location, usedTime, } = bike;


    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const location = form.location.value;
        const usedTime = form.usedTime.value;
        const email = form.email.value;
        const name = form.name.value;
        const phnNum = form.phnNum.value;
        const meetLocation = form.meetLocation.value;

        const booking = {
            usedTime,
            location,
            price,
            email,
            name,
            phnNum,
            meetLocation
        }
        // console.log('Modal booking',booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    setBike(null);
                    toast.success('Booking Confirm');
                }
                
            })


    }
    return (
        <div className='p-3'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 p-5'>
                        <input name='price' type="text" disabled value={`Price: $${price}`} className="input input-bordered input-success w-full " />
                        <input name='location' type="text" disabled value={`Location: ${location}`} className="input input-bordered input-success w-full " />
                        <input name='usedTime' type="text" disabled value={`Used Time: ${usedTime}`} className="input input-bordered input-success w-full " />
                        <input name='phnNum' type="text" placeholder="Phone Number" className="input input-bordered input-success w-full " />
                        <input name='meetLocation' type="text" placeholder="Meeting Location" className="input input-bordered input-success w-full " />

                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Full name" disabled className="input input-bordered input-success w-full " />

                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email" disabled className="input input-bordered input-success w-full" />
                        <button className="btn btn-active btn-primary w-full">Button</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;