import React from 'react'
import Slider01 from '../../assets/images/slider1_d6617dc9-5c34-4bf1-a32e-3df167668e21_2000x.webp'
import Slider02 from '../../assets/images/slider2_9f305fca-5d30-4456-b297-cccd1fdd59c8_2000x.webp'
import Slider03 from '../../assets/images/slider3_f5c65b77-2177-4700-8e23-2342afc0dd69_2000x.webp'

export default function Slider() {
    return (
        <>
            <div className=' w-11/12 md:container mx-auto'>
                <div className="carousel w-full rounded-md">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src={Slider01}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src={Slider02}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src={Slider01}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src={Slider03}
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
