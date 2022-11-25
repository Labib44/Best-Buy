import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ bike,setBike }) => {
    const {user}=useContext(AuthContext);
    console.log('auth context',user.displayName);
    const { name, price,location,usedTime, } = bike;




    const handleBooking = (event) => {
        event.preventDefault();
        const form=event.target;
        const price=form.price.value;
        const location=form.location.value;
        const usedTime=form.usedTime.value;
        const email=form.email.value;
        const name=form.name.value;

        // console.log(usedTime,location,price,email,name)
        setBike(null);
    }
    return (
        <div className='p-3'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 p-5'>
                        <input name='price' type="text" disabled value={`Price: $${price}`} className="input input-bordered input-success w-full " />
                        <input name='location' type="text" disabled value={`Location: ${location}`} className="input input-bordered input-success w-full " />
                        <input name='usedTime' type="text" disabled value={`Used Time: ${usedTime}`} className="input input-bordered input-success w-full " />

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