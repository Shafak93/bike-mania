import React from 'react';
// import { Link } from 'react-router-dom';
import { FaFacebookF, FaGem, FaGithub, FaGoogle, FaHome, FaInstagram, FaLinkedin, FaPhoneAlt, FaPrint, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
            <footer class="text-center text-lg-start bg-light text-muted mt-5">
            <section class="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="" class="me-4 text-reset">
                        <FaFacebookF />
                    </a>
                    <a href="" class="me-4 text-reset">
                        <FaTwitter />
                    </a>
                    <a href="" class="me-4 text-reset">
                        <FaGoogle />
                    </a>
                    <a href="" class="me-4 text-reset">
                        <FaInstagram />
                    </a>
                    <a href="" class="me-4 text-reset">
                        <FaLinkedin />
                    </a>
                    <a href="" class="me-4 text-reset">
                        <FaGithub />
                    </a>
                </div>

            </section>
            <section class="container">
                <div class="text-center text-md-start mt-5">

                    <div class="row mt-3">

                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                <FaGem /> <span className='ml-5'>Bike Mania Limited</span>
                            </h6>
                            <p>
                                A lot of bike collection is in your hand. Brand new collection bikes are available only in Bike Mania warehouse.Any quantity you need can order us. 
                            </p>
                        </div>



                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Yamaha</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Honda</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Hardly Davidson</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Suzuki</a>
                            </p>
                        </div>



                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <Link to='/products' class="text-reset">Products</Link>
                            </p>
                            <p>
                                <a href="#services" class="text-reset">Our Services</a>
                            </p>
                            <p>
                                <a href="#values" class="text-reset">Core Values</a>
                            </p>
                            <p>
                                <a href="partner" class="text-reset">Our Partners</a>
                            </p>
                        </div>



                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><FaHome /> New York, NY 10012, US</p>
                            <p>
                                <FaRegEnvelope />
                                bike@mania.com
                            </p>
                            <p><FaPhoneAlt /> +00 00 00 0000 00</p>
                            <p><FaPrint /> + 11 111 11 111 11</p>
                        </div>

                    </div>

                </div>
            </section>
            <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.07)'}}>
                &copy; All rights reserved {year}<a class="pr-3 text-reset fw-bold ml-3" href="">bikemania.com</a>
            </div>


                {/* <div className='footer-box row container'>
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
            </div> */}
            </footer>
    );
};

export default Footer;

{/* <footer class="text-center text-lg-start bg-light text-muted">

    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

        <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
        </div>



        <div>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
            </a>
        </div>

    </section>



    <section class="">
        <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="fas fa-gem me-3"></i>Company name
                    </h6>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>



                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class="text-uppercase fw-bold mb-4">
                        Products
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Angular</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">React</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Vue</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Laravel</a>
                    </p>
                </div>



                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    <h6 class="text-uppercase fw-bold mb-4">
                        Useful links
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">Pricing</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Settings</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Orders</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">Help</a>
                    </p>
                </div>



                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                    <p>
                        <i class="fas fa-envelope me-3"></i>
                        info@example.com
                    </p>
                    <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                    <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>

            </div>

        </div>
    </section>



    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>

</footer> */}