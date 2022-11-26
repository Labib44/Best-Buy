import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: categorys, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productCategory')
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = (data) => {
        console.log(data);
    }
    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }

    return (
        <div className=''>
            <div className='w-96'>
                <h1 className='text-center text-2xl font-bold'>Add A Product</h1>

                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="name" {...register("name", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                        {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                    </div>
                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email is required' })} className="input input-primary input-bordered w-full" />
                        {/* {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Select Your Category</span>
                        </label>
                        <select {...register("category", { required: 'Category is required' })} className="select select-primary select-bordered w-full ">
                            <option disabled selected>Please select a Category</option>
                            {
                                categorys.map(category => <option
                                    key={category._id}
                                    value={category.category}
                                >{category.category}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="file" {...register("img", { required: 'Photo is required' })} className="input input-primary input-bordered w-full" />
                        {errors.img && <p role="alert" className='text-red-600'>{errors.img?.message}</p>}
                    </div>

                    <input type="submit" className='btn btn-primary w-full m-3' />

                </form>

            </div>
        </div>
    );
};

export default AddProduct;