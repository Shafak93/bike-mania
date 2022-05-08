import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const stock = event.target.stock.value;
        const price = event.target.price.value;
        const SupplierName = event.target.SupplierName.value;
        const img = event.target.img.value;
        const Sold = event.target.Sold.value;

        const product ={name, description, stock, price, SupplierName, img,Sold};

        //Send data to the server
        const url = `http://localhost:5000/bike`;
        fetch(url,{
            method: 'POST',
            headers : {
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data)
            alert('Product added successfully')
            event.target.reset(); // reseting input field form
        })

    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Add New Product</h1>
            <Form onSubmit={handleAddProduct}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name='name' placeholder="Enter Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control type="text" name='description' placeholder="Write Product Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicStock">
                    <Form.Control type="number" name='stock' placeholder="Enter Product Stock" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" name='price' placeholder="Product Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSupplier">
                    <Form.Control type="text" name='SupplierName' placeholder="Enter Product Supplier Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Control type="text" name='img' placeholder="Enter Product image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Control type="number" name='Sold' placeholder="Sold Item 0" value='0' disabled />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
        </div>
    );
};

export default AddProduct;