import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bike')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div id='products' className='mt-5 container'>
            <h1 className='text-center text-gray'>Products</h1>
            <hr />
            <div className=' row  mx-auto mt-4'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
                
            }
             
            </div>
            <Link className='btn btn-primary' to="/manageproducts">Manage Product</Link>
            
        </div>
    );
};

export default Products;