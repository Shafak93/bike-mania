import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bike')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='mt-5 container'>
            <h1 className='text-center text-gray'>Products</h1>
            <hr />
            <Link className='btn btn-secondary' to='/add'>Add New Product</Link>
           
            <div className='mx-auto mt-4'>
            {
                products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
            }
            </div>
        </div>
    );
};

export default ManageProducts;