import { useQuery } from '@tanstack/react-query';
import React from 'react';

const WishList = () => {
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/wishlist');
            const data = await res.json();
            return data;
        }
    });
    
    return (
        <div>
            <h2 className='text-2xl'>Wish List</h2>

            <div className="overflow-x-auto p-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist.map((wish, i) => <tr key={wish._id}>
                                <th>{i + 1}</th>
                                <td>{wish.name}</td>
                                <td>{wish.email}</td>
                                
                                {/* <td>{wish?.role !== 'admin' && <button onClick={() => handleDelete(wish._id)} className='btn btn-xs btn-ghost'>Delete</button>}</td> */}
                    
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;