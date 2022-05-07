import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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
            {/* <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>ID No</th>
                <th>Product Image</th>
                <th>Supplier Name</th>
                <th>Price</th>
                <th>Delete Product</th>
                </tr>
                </thead>
                    {
                     products.map(product =>
                        <tbody>
                        <tr>
                            <td>{product._id}</td>
                            <td> <img className='w-25 rounded' src={product.img} alt="" /> </td>
                            <td>{product.SupplierName}</td>
                            <td>{product.price}</td>
                            <td> <button className='btn btn-secondary'>Delete</button> </td>
                        </tr>
                        </tbody>
                             )
                    }
                
       
            </Table> */}
            <div className='  mx-auto mt-4'>
            {
                products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
            }
            </div>
        </div>
    );
};

export default ManageProducts;