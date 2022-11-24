import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleLogin } = useContext(AuthContext);
    const [loginError,setLoginError]=useState('');
    const googlProvider= new GoogleAuthProvider();

    const handleLogin = (data) => {
        // console.log(data);
        setLoginError('');

        signIn(data.email, data.password)
        .then(result=>{
            const user=result.user;
            // console.log(user);
            toast.success('Login Successfully')
        })
        .catch(error=> {
            console.log(error)
            setLoginError(error.message);
        })
    }

    const handleGoogleLogin=()=>{
        googleLogin(googlProvider)
        .then(result =>{
            const user=result.user;
            console.log(user)
            
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className='flex justify-center '>
            <div className='w-96'>
                <h1 className='text-center text-2xl font-bold'>login</h1>

                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-primary input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 charecters long' } })} className="input input-primary input-bordered w-full" />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forgot Password</span>
                        </label>
                        <div>
                            {loginError && <p className='text-red-700'>{loginError}</p>}
                        </div>
                    </div>

                    <input type="submit" className='btn btn-primary w-full m-3' />
                    <p className='p-3'>New to Best buy ?<Link to='/signup' className='text-primary'>Create an account</Link></p>

                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full btn-primary m-3">Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;