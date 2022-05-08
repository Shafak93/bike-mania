import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddProduct = () => {
    // name, img, description, stock, price,SupplierName
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Add New Product</h1>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control type="text" placeholder="Write Product Description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicStock">
                    <Form.Control type="number" placeholder="Enter Product Stock" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="number" placeholder="Product Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSupplier">
                    <Form.Control type="text" placeholder="Enter Product Supplier Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Control type="text" placeholder="Enter Product image URL" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
        </div>
    );
};

export default AddProduct;