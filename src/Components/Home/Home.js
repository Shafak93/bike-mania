import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurServices from '../OurServices/OurServices';
import OurValues from '../OurValues/OurValues';
import Partners from '../Partner/Partners';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurServices></OurServices>
            <OurValues></OurValues>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;