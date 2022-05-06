import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div id='products' className='mt-5'>
            <h1 className='text-center text-gray'>Products</h1>
            <hr className='container' />
            <div className='container row  mx-auto mt-4'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;