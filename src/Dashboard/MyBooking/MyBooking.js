import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyBooking = () => {
    const {user}=useContext(AuthContext);

    const url=`http://localhost:5000/bookings?email=${user?.email}`;

    const {data:bookings=[]}=useQuery({
        queryKey:['bookings', user?.email],
        queryFn:async()=>{
            const res=await fetch(url);
            const data=await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-2xl'>My Booked Products</h2>

            <div className="overflow-x-auto p-5">
                <table className="table w-full">
            
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Used Time</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                    bookings.map((booking, i )=> <tr key={user._id}>
                        <th>{i+1}</th>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.location}</td>
                        <td>{booking.usedTime}</td>
                        <td>{booking.price}</td>
                        <td>
                            {
                               booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-ghost btn-xs">Pay</button></Link> 
                            }
                            {
                                booking.price && booking.paid && <span className='text-primary'>Paid</span>
                            }
                        </td>
                    </tr>)
                   }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;