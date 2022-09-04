import React from 'react';
import logo1 from '../../images/partner/logo_1.png';
import logo2 from '../../images/partner/logo_2.png';
import logo3 from '../../images/partner/logo_3.png';
import logo4 from '../../images/partner/logo_4.png';
import logo5 from '../../images/partner/logo_5.png';
import logo6 from '../../images/partner/logo_6.png';
import './Partners.css';

const Partners = () => {
    const logos = [
        { 
            'id': 1,
            'logo' : logo1
        },
        { 
            'id': 2,
            'logo' : logo2
        },
        { 
            'id': 3,
            'logo' : logo3
        },
        { 
            'id': 4,
            'logo' : logo4
        },
        { 
            'id': 5,
            'logo' : logo5
        },
        { 
            'id': 6,
            'logo' : logo6
        }
    ]
    return (
        <div className='container mt-5'>
            <h1>Our Partners</h1>
            <hr />
            <div className='d-flex flex-wrap justify-content-around'>
                {
                    logos.map(logo =>
                        <div key={logo.id} className='partner-box'>
                            <img src={logo.logo} alt="" />
                        </div>)
                }
            </div>
        </div>
    );
};

export default Partners;