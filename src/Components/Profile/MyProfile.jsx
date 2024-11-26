import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import Loading from '../LoadingPage/Loading';
import { useNavigate } from 'react-router-dom';

export default function MyProfile() {
  document.title= "MyProfile || eco-adventure";

   const { user, loading } = useContext(AuthContext);
   const Navigate = useNavigate();
    // if(loading){
    //     return <Loading />;
    // }

    const updateUser = () => {
      Navigate('/updata')
    }

  return (
    <>
      <div className=' flex flex-col min-h-screen justify-center items-center'>
        <div className=' w-11/12 md:w-4/12 rounded-md bg-slate-200 p-5 text-center'>
          <div>
          <h2 className=' text-3xl  font-semibold mb-5 text-lime-800'>WellCome</h2>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <div className=' my-5'>
            <button onClick={updateUser} className=' btn btn-accent'>Update profile</button>
            <h2 className=' text-xl font-semibold mt-5'><span className=' font-bold'>Name:</span> {user?.displayName}</h2>
            <h2 className=' text-xl font-semibold my-2'><span className=' font-bold'>Email:</span> {user?.email}</h2>
            <h2 className=' text-xl font-semibold'><span className=' font-bold'>Id:</span> {user?.uid}</h2>
          </div>
        </div>
      </div>
    </>
  )
}
