import { Link } from 'react-router-dom'

export default function Error() {
    
  return (
    <>
      <div className=' min-h-screen flex flex-col bg-slate-300 justify-center items-center'>
        <h1 className=' text-3xl font-bold'>Error 404: Page Not Found</h1>
        <p className=' text-xl font-semibold mt-3'>The requested page could not be found.</p>
        <Link className=' btn btn-accent text-white mt-4'>Back to HomePage</Link>
      </div>
    </>
  )
}
