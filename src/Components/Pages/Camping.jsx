import React from 'react'

export default function Camping() {
  document.title= "Camping || eco-adventure";
  return (
    <>
      <div
        className="hero h-[600px] container mx-auto rounded-md"
        style={{
          backgroundImage: "url(https://www.campingretreats.co.za/images/cr54deluxe/20210122_123653.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Book your Camping RetrEat Here</h1>
            <p className="mb-5 text-xl font-semibold">A List of all available camping retreats</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* category section start here now **********************************/}
      {/* category section start here now **********************************/}

      <div className=' w-11/12 md:container mx-auto grid md:grid-cols-3 gap-10 my-20'>
        <div className=' md:col-span-3'>
          <h2 className=' text-4xl font-bold'>2024</h2>
          <p className=' text-xl font-semibold mt-3'>
          We release a new date every month.</p>
        </div>
     
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://www.campingretreats.co.za/images/cr59drakensberg/org_6de57ea59313cdb1_1611916688000.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>CAMPING RETREATS Deluxe</h2>
          <h2 className=' text-xl font-semibold'>Drakensberg,Kwa-zulu Natal</h2>
          <h2 className=' text-xl font-semibold'>JANUARY 2025</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'>2 Nights</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R4,999 p/p/s</span></h2>
        </div>
     
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://www.campingretreats.co.za/images/crfeb2025/20231015_084718.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>CAMPING RETREATS Deluxe</h2>
          <h2 className=' text-xl font-semibold'> Parys,Free State</h2>
          <h2 className=' text-xl font-semibold'>FEBRUARY 2025</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'>2 Nights</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R7,599 /couple</span></h2>
        </div>
     
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full bg-yellow-400 rounded-md' src="https://www.campingretreats.co.za/images/bushfire23/BF-logo2-sml-480x480.png" alt="" />
          <h2 className=' text-2xl font-bold'>BUSHFIRE 2025</h2>
          <h2 className=' text-xl font-semibold'>House on fire, Marlkens, Eswatini</h2>
          <h2 className=' text-xl font-semibold'>30 May - 1 June 2025</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'> 2,3 & 4 nights</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R4,999 p/p/s</span></h2>
        </div>
     
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://www.campingretreats.co.za/images/crtsitsikamma23/20220902_075832.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>CAMPING RETREATS</h2>
          <h2 className=' text-xl font-semibold'>TSITSIKAMMA,Eastern Cape</h2>
          <h2 className=' text-xl font-semibold'>NOVEMBER 2024 (4 days)</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'> 4 days</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R7,999 p/p/s</span></h2>
        </div>
     
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://www.campingretreats.co.za/images/crfamilyadventure/20231202_092930.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>CAMPING RETREATS</h2>
          <h2 className=' text-xl font-semibold'>Drakensberg,Kwa-zulu Natal</h2>
          <h2 className=' text-xl font-semibold'> Badplaas,Forever Resort, Mpumalanga</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'> 13-16 DECEMBER 2024 (4 days)</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'> R6,099 p/p/s</span></h2>
        </div>
     
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://www.campingretreats.co.za/images/crfamily/20231225_104554.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>CAMPING RETREATS</h2>
          <h2 className=' text-xl font-semibold'>Drakensberg,Kwa-zulu Natal</h2>
          <h2 className=' text-xl font-semibold'>23-27 DECEMBER 2024 (5 days)</h2>
          <h2 className=' text-xl font-semibold'> Self-drive/ Transport available</h2>
          <h2 className=' text-xl font-semibold'> 5 days</h2>
          <h2 className=' text-xl font-semibold'>Price from: <span className=' text-yellow-600'>R4,999 p/p/s</span></h2>
        </div>
        
      </div>


    </>
  )
}
