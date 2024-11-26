import React, { useContext, useRef } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';

export default function ForgetPassWord() {
    document.title= "ForgetPassword || eco-adventure";
    const { resetPassword } = useContext(AuthContext);
        // forget password functionality start here now********************************
    // forget password functionality start here now********************************

    const emailRef = useRef();
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = (emailRef.current.value);
        // console.log(email);
        
        if(!email.length){
            toast.error("Please enter your email address")
            return;  // if email is not provided then return from function immediately to avoid further execution.
        }
        else{
            resetPassword(email)
            .then(results => {
                emailRef.current.value = "";
                toast.success("Password reset link sent to your email")
                setTimeout(()=>{
                    window.location.href = "https://mail.google.com/", '_blank';
                }, 3000)
            })
            .catch(error => {
                toast.error("Something went wrong " + error.message)
            })
        }
    }    


  return (
    <>
    <ToastContainer position="top-center" />
    <div className=' flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl relative">
                <h2 className=' text-center font-bold  text-2xl mt-5'>Update Your Password</h2>
            <Link to="/login" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Enter your email"  ref={emailRef} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSubmit} className="btn btn-primary">Reset Password</button>
                           </div>
                    </form>
                </div>
            </div>
    </>
  )
}
