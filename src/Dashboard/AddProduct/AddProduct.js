import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {
    const {user}=useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = process.env.REACT_APP_IMG;
    // console.log(imgHostKey);
    const navigate=useNavigate()

    const { data: categorys, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productCategory')
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = (data) => {
        // console.log(data);
        const picture = data.picture[0];
        const formData = new FormData();
        formData.append('image', picture);

        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                if (imgdata.success) {
                    // console.log(imgdata.data.url);
                    const product = {
                        name:data.name,
                        email:data.email,
                        category:data.category,
                        picture:imgdata.data.url,

                        usedTime:data.usedTime,
                        originalPrice:data.originalPrice,
                        price:data.price,
                        productCondition:data.productCondition,
                        location:data.location,
                        phnNum:data.phnNum,
                        date:data.date,
                        details:data.details,
                    }
                    console.log('Add a product:--',product);
                    // save product data
                    fetch('http://localhost:5000/products',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json',
                            authorization:`bearer ${localStorage.getItem('accessToken')}`
                        },
                        body:JSON.stringify(product)
                    })
                    .then(res=>res.json())
                    .then(result=>{
                        console.log(result);
                        toast.success('Product Added SuccessFull')
                        navigate('/')
                    })
                }
            })
    }




    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }

    return (
        <div className=''>
            <div className='w-96'>
                <h1 className='text-center text-2xl font-bold'>Add A Product</h1>

                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="name" {...register("name", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>
                        <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">Used of Years</span>
                            </label>
                            <input type="name" {...register("usedTime", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>
                        <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="name" {...register("originalPrice", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>
                        <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">New Price</span>
                            </label>
                            <input type="name" {...register("price", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>
                        <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">Condition Of Product</span>
                            </label>
                            <input type="name" {...register("productCondition", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>
                        <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="name" {...register("location", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>
                        <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="name" {...register("phnNum", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>
                        <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="name" {...register("date", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>
                        
                    </div>
                    <div className="form-control w-full mx-3">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="name" {...register("details", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                            {/* {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>} */}
                        </div>




                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} readOnly {...register("email", { required: 'Email is required' })} className="input input-primary input-bordered w-full" />
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
                            <span className="label-text">Upload Your Product Image</span>
                        </label>
                        <input type="file" {...register("picture", { required: 'Photo is required' })} className="input input-primary input-bordered w-full" />
                        {errors.img && <p role="alert" className='text-red-600'>{errors.img?.message}</p>}
                    </div>

                    <input type="submit" className='btn btn-primary w-full m-3' />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;