import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import AllPlaces from './Components/AllPlacesCard/AllPlaces'
import Footer from './Components/Footer/Footer'
import { AuthContext } from './AuthProvider/AuthProvider'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  document.title= "Eco-adventure";

  useEffect(()=>{
    Aos.init({
      duration: 1000,
    });
  }, [])
  
  return (
    <>
       <header>
          <div  data-aos="fade-up"><Slider /></div>
          <div data-aos="fade-left"><AllPlaces /></div>
       </header>
    </>
  )
}

export default App
