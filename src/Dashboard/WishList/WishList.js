import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const WishList = () => {

    const {user}=useContext(AuthContext);

    const url=`https://best-buy-server-three.vercel.app/wishlist?email=${user?.email}`;

    const {data:wishlist=[], refetch}=useQuery({
        queryKey:['wishlist', user?.email],
        queryFn:async()=>{
            const res=await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data=await res.json();
            return data;
        }
    })

// delete wish list
    const handleDelete = (_id) => {
        fetch(`https://best-buy-server-three.vercel.app/wishlist/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log('delete', data);
                if(data.deletedCount > 0){
                    refetch();
                    toast.success('Delete Successfull')
                }
                
            })
    }

    return (
        <div>
            <h2 className='text-2xl'>Wish List</h2>

            <div className="overflow-x-auto p-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist.map((wish, i) => <tr key={wish._id}>
                                <th>{i + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={wish.picture} alt=""/>
                                        </div>
                                    </div>
                                </th>
                                <td>{wish.name}</td>
                                <td>{wish.email}</td>

                                <td>{wish?.role !== 'admin' && <button onClick={() => handleDelete(wish._id)} className='btn btn-xs btn-ghost'>Delete</button>}</td>
                                <td>
                            {
                               wish.price && !wish.paid && <Link to={`/dashboard/payment/${wish._id}`}><button className="btn btn-primary btn-xs">Pay</button></Link> 
                            }
                            {
                                wish.price && wish.paid && <span className='text-green-500 font-bold'>Paid</span>
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

export default WishList;