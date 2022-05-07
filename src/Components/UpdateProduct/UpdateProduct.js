import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css';

const UpdateProduct = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/bike/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const {stock,name,SupplierName,price,Quantity,Sold} = product;
    const handleUpdateStock = event =>{
        event.preventDefault();
        const updatedStock = parseFloat(stock) + parseFloat(event.target.stock.value);
        const updateInfo = {stock : updatedStock,name,SupplierName,price,Quantity,Sold}
        setProduct(updateInfo);

        //Send data to the server
        const url = `http://localhost:5000/bike/${productId}`
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
            alert('Stock updated')
            event.target.reset()
        })
    }

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
                        <button className='btn btn-secondary'>Delivered</button>
                    </div>
            </div>
            <div className='col-md-6'>
                    <Form onSubmit={handleUpdateStock}>
                        <Form.Group className="mb-3" controlId="formBasicStock">
                            <Form.Control type="number" name='stock' placeholder='Restock' />
                        </Form.Group>
                        <button className='btn btn-secondary'>Update</button>
                    </Form>
            </div>
        </div>
    );
};

export default UpdateProduct;