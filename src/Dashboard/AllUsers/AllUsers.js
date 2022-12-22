import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://best-buy-server-three.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    // user delete
    const handleDelete = (_id) => {
        fetch(`https://best-buy-server-three.vercel.app/users/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log('delete', data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Delete Successfull')
                }

            })
    }

    // Make admin
    const handleMakeAdmin = (_id) => {
        fetch(`https://best-buy-server-three.vercel.app/users/admin/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfull')
                    refetch();
                }
            })
    }


    return (
        <div>
            <h2 className='text-2xl'>All Users</h2>

            <div className="overflow-x-auto p-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-ghost'>Make Admin</button>}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-ghost'>Delete</button>}</td>
                                {/* <td><button onClick={() => handleDelete(user._id)} className='btn btn-xs btn-ghost'>Delete</button></td> */}


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;