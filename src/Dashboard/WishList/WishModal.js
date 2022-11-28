import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const WishModal = ({ wish, setWish }) => {
    const { user } = useContext(AuthContext);
    const { name, price, picture, location, usedTime, phnNum } = wish;
    

    const handlewish = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const email = form.email.value;

        const wishlist = {
            usedTime,
            location,
            price,
            email,
            name,
            picture
        }

        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlist)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    setWish(null);
                    toast.success('Wish Confirmed');
                }
                
            })

        
        // console.log('wish List', wishlist);
    }

    return (
        <div className='p-3'>
            <input type="checkbox" id="wish-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="wish-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold">{name}</h3>
                    <form onSubmit={handlewish} className='grid grid-cols-1 gap-5 p-5'>
                        <input name='price' type="text" disabled value={`Price: $${price}`} className="input input-bordered input-success w-full " />


                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email" disabled className="input input-bordered input-success w-full" />
                        <button className="btn btn-active btn-primary w-full">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WishModal;