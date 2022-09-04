import React from 'react';
import { FaArchive, FaDropbox, FaGlobe, FaHome, FaRoad, FaTruckMoving } from "react-icons/fa";
import './OurServices.css';

const OurServices = () => {
    const services = [
        {
            'id': 1,
            'title': 'PACKAGING AND STORAGE',
            'body': 'We can package and store your things.',
            'icon': <FaDropbox size={40} className='icon' />
        },
        {
            'id': 2,
            'title': 'CARGO',
            'body': 'We can package and store your things.',
            'icon': <FaTruckMoving size={40} className='icon' />
        },
        {
            'id': 3,
            'title': 'PACKAGING AND STORAGE',
            'body': 'We can package and store your things.',
            'icon': <FaGlobe size={40} className='icon' />
        },
        {
            'id': 4,
            'title': 'PACKAGING AND STORAGE',
            'body': 'We can package and store your things.',
            'icon': <FaArchive size={40} className='icon' />
        },
        {
            'id': 5,
            'title': 'PACKAGING AND STORAGE',
            'body': 'We can package and store your things.',
            'icon': <FaHome size={40} className='icon' />
        },
        {
            'id': 6,
            'title': 'PACKAGING AND STORAGE',
            'body': 'We can package and store your things.',
            'icon': <FaRoad size={40} className='icon' />
        },
    ]
    return (
        <div id='services' className='container mt-5'>
            <h1>Our Services</h1>
            <hr />
            <div className='row'>
                {
                    services.map(service =>
                        <div key={service.id} className='col-lg-4 '>
                            <div className='service-box d-flex p-3 m-2'>
                                <div>
                                    <h6>{service.title}</h6>
                                    <p><small>{service.body} </small></p>
                                </div>
                                <span>
                                    {service.icon}
                                </span>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default OurServices;