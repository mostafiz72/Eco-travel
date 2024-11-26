import React, { useContext, useEffect, useState } from 'react'
import PlaceDetails from './PlaceDetails';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function AllPlaces() {
    const [place, setPlace] = useState([]);
    const { user, googleLogin } = useContext(AuthContext)
    const Navigate = useNavigate();
    
    useEffect(()=>{
        fetch('AllData.json')
       .then(res => res.json())
       .then(data => setPlace(data))
    }, [])

    /// Sing In With Google functionality start here now *********************************

    // const handleGoogleLogin = ()=>{
    //   googleLogin()
    //   .then(result => {
    //     return result
    //   })
    //   .catch (err => {
    //     return err
    //   })
        
    // }


    
  return (
    <>
      <div className=' w-11/12 md:container mx-auto'>
            <div className=' my-10 flex justify-between items-center'>
              <div><h1 className='text-3xl font-bold text-left animate__animated animate__backInUp'>Most Beautifull Places</h1></div>
              <div>{/* {!user && <button onClick={handleGoogleLogin} className=' btn btn-accent'><FaGoogle /> Login Wtih Google</button>} */}</div>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    place.map((item, index) => <PlaceDetails key={index} item={item}></PlaceDetails>)
                }
            </div>
      </div>
    </>
  )
}
