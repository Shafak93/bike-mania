import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from './../../images/banner/banner-1.jpg';
import banner2 from './../../images/banner/banner-2.jpg';
import banner3 from './../../images/banner/banner-3.jpg';

const Banner = () => {
    const banners = [
        {
             id : 1,
            image: banner1,
            title : 'Bike Mania'
        },
        { 
            id: 2,
            image: banner2
        },
        {
            id : 3,
            image: banner3
        }
    ]
    return (
        <div>
            <Carousel >
                {
                    banners.map(banner =>
                        <Carousel.Item key={banner.id}>
                            <img
                                height={500}
                                className="d-block w-100"
                                src={banner.image}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h1 className='text-white'>{ banner.title}</h1>

                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                }
                        {/* <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={banner3}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                           <h1 className='text-white'>Bike Mania</h1>
                            
                            </Carousel.Caption>
                        </Carousel.Item> */}
                        {/* <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={banner1}
                            alt="Third slide"
                            />

                            
                        </Carousel.Item> */}
                </Carousel>
        </div>
    );
};

export default Banner;