import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';

export default function Register() {
    document.title= "Register || eco-adventure";
   const { SignUpUser, setUser, updataprofile } = useContext(AuthContext)
   const location = useLocation();
   const Navigate = useNavigate();
//    console.log(location);
   
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the login logic
        const form = new FormData(e.target);  // Nutun vabe input form thek data neuya jai ta amara dekhalam
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        // console.log({ email, password });

         /// password check kora hoyse jno onno validation sara dhukte na pare

            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/; 

            if(!passwordRegex.test(password)){
              toast.error("Password should contain at least 6 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character")
             return;
            }

        SignUpUser(email, password)
        .then(result =>{
            // const user = result.user;
            // console.log(result.user);
            
            toast.success("SignUp Success")
            setUser(result.user);

            updataprofile({displayName: name, photoURL: photo})
            .then(result => {
            })
            .catch(err => {
                // console.log(err);
                toast.error("Failed to update profile: " + err.message)
                e.target.reset();
            })

            setTimeout(()=>{
                Navigate(location?.state ? location.state : "/")
            }, 3000 )
        })
        .catch(error =>{
            toast.error("Something went wrong " + error.message)
        })
    }

    return (
        <>
        <ToastContainer position="top-center" /> 
            <div className=' flex justify-center items-center h-screen'>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl relative">
                <h2 className=' text-center font-bold  text-2xl mt-5'>Register From</h2>
                <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">FullName</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhootURL</span>
                            </label>
                            <input name='photo' type="text" placeholder="PhotoURL" className="input input-bordered"  />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <p className=' text-right font-semibold mb-5'>Allready Have An Account ? <Link to="/login" className="text-red-500 hover:underline">Login</Link></p>
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}