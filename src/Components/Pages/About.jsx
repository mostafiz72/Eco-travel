import React from 'react'

export default function About() {
  document.title= "Bungee-Jumping || eco-adventure";
  return (
    <>
      <div
        className="hero h-[600px] container mx-auto rounded-md"
        style={{
          backgroundImage: "url(https://www.coruba.co.uk/wp-content/uploads/bungee.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">LET THE WINTER GAMES COMMENCE!</h1>
            <p className="mb-5 text-xl font-semibold">A List of all available camping retreats</p>
            <button className="btn btn-warning">READ MORE</button>
          </div>
        </div>
      </div>

      {/* / Our tips section start here now/ */}
      <div className=' grid grid-cols-3 gap-10 container mx-auto my-20'>
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/event-img-6.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>WINTER CLIMBING</h2>
          <h2 className=' text-xl font-semibold'>Hochzillertal, Austria</h2>
          <h2 className=' text-xl font-semibold'>2 Nights</h2>
        </div>
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/event-img-7.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>alpine skiing</h2>
          <h2 className=' text-xl font-semibold'>Verbier, Swizerland</h2>
          <h2 className=' text-xl font-semibold'>8 Nights</h2>
        </div>
        <div className=' bg-slate-100 p-5 rounded-md'>
          <img className=' mb-5 h-[300px] object-cover w-full' src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/event-img-8.jpg" alt="" />
          <h2 className=' text-2xl font-bold'>FREESTYLE SKIING</h2>
          <h2 className=' text-xl font-semibold'>Hochzillertal, Iceland</h2>
          <h2 className=' text-xl font-semibold'>`2 Nights</h2>
        </div>
      </div>

      {/* 3rd section start here now */}
      {/* 3rd section start here now */}

      <div className=' relative'>
        <div
          className="hero h-[600px]"
          style={{
            backgroundImage: "url(https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/h3-rev-img-1-1.jpg)",
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
          </div>
        </div>
      </div>

      {/* / Our tips section start here now/ */}
      <div className=' grid grid-cols-4 my-20'>
        <div className=' bg-slate-100 rounded-md'>
          <img className=' h-[300px] object-cover w-full' src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/h3-banner-img-1.jpg" alt="" />
          </div>
        <div className=' bg-slate-100 rounded-md'>
          <img className=' h-[300px] object-cover w-full' src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/h3-banner-img-2.jpg" alt="" />
         </div>
        <div className=' bg-slate-100 rounded-md'>
          <img className=' h-[300px] object-cover w-full' src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/h3-banner-img-3.jpg" alt="" />
           </div>
        <div className=' bg-slate-100 rounded-md'>
          <img className=' h-[300px] object-cover w-full' src="https://klippe.qodeinteractive.com/wp-content/uploads/2018/02/h3-banner-img-4.jpg" alt="" />
           </div>
      </div>
    </>
  )
}
