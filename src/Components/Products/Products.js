import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://pure-dawn-30525.herokuapp.com/bike')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    if(products.length === 0){
      return  <Loading></Loading>
    }
    return (
        <div id='products' className='products mt-5 container'>
            <h1>Products</h1>
            <hr />
            <div className=' row mt-4'>
            {
                products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
            <Link className='btn btn-primary' to="/manageproducts">Manage Product</Link>
        </div>
    );
};

export default Products;