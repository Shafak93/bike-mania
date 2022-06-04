import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='mt-4'>
            <div className='footer-box row container'>
                <div className='col-12 col-md-6 col-lg-6 mt-4'>
                    <ul>
                    <p>Quick Links</p>
                        <Link  className='link' to='/'><li>Home</li></Link>
                        <Link  className='link' to='/brand'><li>Brand</li></Link>
                        <Link className='link' to='/blog'><li>Blog</li>  </Link>
                        <Link className='link' to='/products'> <li>Products</li></Link>
                        <Link className='link' to='/login'><li>Login</li></Link>
                        <Link className='link' to='/signup'><li>Signup</li></Link>
                    </ul>
                </div>
                <div className='footer-text col-md-6 col-12 col-lg-6 pt-lg-5 pt-md-5 text-md-end text-lg-end'>
                    <h1>Bike Mania</h1>
                    <p> &copy; All rights reserved {year}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;