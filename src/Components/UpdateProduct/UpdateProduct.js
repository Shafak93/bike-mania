import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css';

const UpdateProduct = () => {
    const {productId} = useParams();
    console.log(productId);
    const [product, setProduct] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/bike/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div className='container mt-3 row'>
            <div className='col-md-6 row details'>
                    <div className='col-md-4'>
                        <img className='w-100' src={product.img} alt="" />
                    </div>
                    <div className='col-md-8'>
                        <h3>Name: {product.name}</h3>
                        <p>Supplier Name: {product.SupplierName} </p>
                        <p>Price: {product.price} </p>
                        <p>Quantity: {product.Quantity} </p>
                        <p>Sold: {product.Sold} </p>
                        <p>Stock: {product.stock} </p>
                    </div>
            </div>
            <div className='col-md-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" name='name' placeholder={product.Quantity} disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicStock">
                            <Form.Control type="number" name='restock' placeholder='Restock' />
                        </Form.Group>
                        <button className='btn btn-secondary'>Update</button>
                    </Form>
            </div>
        </div>
    );
};

export default UpdateProduct;