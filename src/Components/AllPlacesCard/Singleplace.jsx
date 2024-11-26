import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { MdMoodBad } from 'react-icons/md'

export default function Singleplace() {

    const { adventureCost, adventureLevel, adventureTitle, categoryName, duration, ecoFriendlyFeatures, image, location, shortDescription, specialInstructions } = useLoaderData();

    // console.log(ecoFriendlyFeatures);

    /// Talk to expart user functionality start here now******************************************
    /// Talk to expart user functionality start here now******************************************

    const handleConsultationTime = () => {
        const currentTime = new Date();
        const currentHours = currentTime.getHours();
        const currentMin = currentTime.getMinutes();

        /// Difine the Consultation time range : 10: 00 AM - 8: 00 PM

        const startTime = { hours: 10, minutes: 0 };  // start time is 10: 00 AM
        const endTime = { hours: 20, minutes: 0 };  // end time is 08: 00 PM

        // Check the current time falls withen concultation hours

        const isWithinTime = (currentHours > startTime.hours || (currentHours === startTime.hours && currentMin >= startTime.minutes)) &&
            (currentHours < endTime.hours || (currentHours === endTime.hours && currentMin <= endTime.minutes))

        if (isWithinTime) {
            window.open('https://meet.google.com', '_blank');
        }
        else {
            my_modal_3.showModal()
        }


    }


    return (

              
        <div>
      
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-9xl text-lime-500 text-center flex justify-center items-center"><MdMoodBad /></h3>
            <h3 className="font-bold text-xl text-center">No Support Session Ongoing Now!!</h3>
            <p className="py-4 text-center text-xl">Morning: 10:00am to 8:00pm</p>
          </div>
        </dialog>
        
            <Navbar />
            <div className="bg-gray-100 p-6 flex justify-center items-center container mx-auto">
                <div className="grid lg:grid-cols-2 gap-5 bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* <!-- Image Section --> */}
                    <div className="">
                        <img src={image} alt="Meatball Stroganoff Rice Bowl" className="h-full w-full object-cover" />
                    </div>
                    {/* <!-- Content Section --> */}
                    <div className=" p-6 flex flex-col">
                        {/* <!-- Title and Availability --> */}
                        <div className="flex flex-col ">
                            <h2 className="text-2xl font-bold text-gray-800 text-left">Name: {adventureTitle}</h2>
                            <h2 className="text-lg font-bold text-gray-800 text-left my-5">Category: {categoryName}</h2>
                        </div>
                        <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                            Description: {shortDescription}
                        </p>
                        {/* <!-- Price Section --> */}
                            <h3 className=' text-xl font-bold mt-5'>EcoFriendlyFeatures:-</h3>
                        <ul className="pl-10">
                            {
                                ecoFriendlyFeatures.map((result, index) => <ul key={index}>
                                   <li className=' list-disc font-semibold'>{result}</li>
                                </ul>)
                            }
                        </ul>
                        <h3 className=' text-xl font-bold mt-5'>SpecialInstructions:-</h3>
                        <ul className="pl-10">
                            {
                                specialInstructions.map((result, index) => <ul key={index}>
                                   <li className=' list-disc font-semibold'>{result}</li>
                                </ul>)
                            }
                        </ul>
                        {/* <!-- Pre-order Button //--> */}
                        <div>
                        <h2 className="text-lg font-bold text-gray-800 text-left mt-3">Total Cost: ${adventureCost}</h2>
                        <h2 className="text-lg font-bold text-gray-800 text-left my-2">Days: {duration}</h2>
                        <h2 className="text-lg font-bold text-gray-800 text-left">Locations: {location}</h2>
                        </div>
                        <div className="mt-4">
                            <Link to="/" className="btn btn-error text-slate-800 text-lg mr-3">More Places</Link>
                            <button onClick={handleConsultationTime} className="btn btn-accent text-slate-800 text-lg">Talk with Expart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}
