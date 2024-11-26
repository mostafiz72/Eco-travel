import React from 'react'
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { app } from '../../Firebase/Firebase.config';
const auth = getAuth(app);

export default function PlaceDetails({ item }) {
    const { id, adventureTitle, image, ecoFriendlyFeatures} = item;
    return (
        <>
            <div className="card card-compact bg-base-100 p-5 shadow-xl">
                <figure>
                    <img className=' w-full h-[300px] object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div>
                    <h2 className="card-title my-5 font-bold text-2xl">{adventureTitle}</h2>
                    <div className=' my-5'>
                        {
                            ecoFriendlyFeatures.map((feature, index) => (
                                <ul key={index}>
                                    <li className=' text-lg font-semibold list-disc p-0 ml-5'>{feature}</li>
                                </ul>
                            ))
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/singleplace/${id}`} className="btn btn-primary">Explore Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
