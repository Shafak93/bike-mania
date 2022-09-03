import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurServices from '../OurServices/OurServices';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <OurServices></OurServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;