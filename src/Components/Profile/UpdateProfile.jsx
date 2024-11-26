import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'

export default function UpdateProfile() {
    document.title= "UpdateProfile || eco-adventure";

    const { updataprofile } = useContext(AuthContext);
    const Navigate = useNavigate();

    const updatedProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        // console.log({ name, photo });

        updataprofile({ displayName: name, photoURL: photo })
            .then(result => {
                e.target.reset();
                toast.success("Profile updated successfully")
                setTimeout(()=>{
                    Navigate("/");
                }, 3000)
            })
            .catch(err => {
                // console.log(err);
                toast.error("Failed to update profile: " + err.message)
                e.target.reset();
            })

    }


    return (
        <>
        <ToastContainer position="top-center" />
            <div className=' flex justify-center items-center h-screen'>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl relative">
                    <h2 className=' text-center font-bold  text-2xl mt-5'>Update Your Profile</h2>
                    <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                    <form onSubmit={updatedProfile} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name='photo' type="text" placeholder="Enter your photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
