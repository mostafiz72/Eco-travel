import React, { useContext, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom'
import { IoMdClose, IoMdCloseCircleOutline, IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

export default function LoginPage() {
  document.title= "Loin || eco-adventure";

   const { SignInUser, user, setUser, forgetPassword, googleLogin } = useContext(AuthContext)
   const location = useLocation();
   const Navigate = useNavigate();
//    console.log(location);
   
    const [show, setShow] = useState(false);
    // const emailRef = useRef();

    const handleShow = () => {
        setShow(!show);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the login logic
        const form = new FormData(e.target);  // Nutun vabe input form thek data neuya jai ta amara dekhalam
        const email = form.get("email");
        const password = form.get("password");
        // console.log({ email, password })

        SignInUser(email, password)
        .then(result =>{
            setUser(result.user);
            toast.success("Login Succfull")
            Navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
            toast.error("Something went wrong " + error.message)
        })
    }


    /// Login with google functionality start here now*********************************

    const handleLoginWithGoogle = ()=>{
        googleLogin()
        .then( d => {
            // console.log(d.user);
            Navigate(location?.state ? location.state : "/")
            
        }).catch(error => {
            return error.message;
            // console.log(error.message);
            
        })
    }


    // forget password functionality start here now********************************
    // forget password functionality start here now********************************

    // const handleForget = () => {
    //     const email = (emailRef.current.value);
    //     if(!email.length){
    //         toast.error("Please enter your email address")
    //         return;  // if email is not provided then return from function immediately to avoid further execution.
    //     }
    //     else{
    //         forgetPassword(email)
    //         .then(results => {
    //             toast.success("Password reset link sent to your email")
    //         })
    //         .catch(error => {
    //             toast.error("Something went wrong " + error.message)
    //         })
    //     }
    //    }

    return (
        <>
        <ToastContainer position="top-center" />
            <div className=' flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl relative">
                <h2 className=' text-center font-bold  text-2xl mt-5'>Login From</h2>
            <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show?"text":"password"} name='password' placeholder="password" className="input input-bordered" required />
                            <button onClick={handleShow} className=' text-xl absolute top-[52px] right-5'>{show?<IoMdEye />:<IoMdEyeOff />}</button>
                            <label className="label">
                                <Link to="/forget" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control flex flex-col justify-center w-full">
                            <p className=' text-right mb-3 font-semibold'>Don't Have An Account ? <Link to="/register" className="text-red-500 hover:underline">Register</Link></p>
                            <button className="btn btn-primary">Login</button>
                            <span className=' text-xl my-3 text-center'>or</span>
                            <button onClick={handleLoginWithGoogle} className=' btn btn-accent'> <span className=' text-yellow-400 text-lg'><FaGoogle /></span> Login Wtih Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}