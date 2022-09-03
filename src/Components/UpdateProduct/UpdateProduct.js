import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';
import './UpdateProduct.css';

const UpdateProduct = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        const url = `https://pure-dawn-30525.herokuapp.com/bike/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    /*==================
    Update Stock Function
    ======================*/
    const {stock,name,SupplierName,price,Sold} = product;
    const handleUpdateStock = event =>{
        event.preventDefault();
        const newStock = event.target.stock.value;
        if(newStock > 1){
            const preStock = parseFloat(stock);
            const currentStock = parseFloat(event.target.stock.value);
            const updatedStock = preStock + currentStock;
            const updateInfo = {...product,stock : updatedStock}
            setProduct(updateInfo);
    
            //Send data to the server
            const url = `https://pure-dawn-30525.herokuapp.com/bike/${productId}`
            fetch(url,{
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(updateInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('Stock updated')
                event.target.reset()
            })
        }else{
            alert('Enter a number greater than 0')
        }
    }

    const deliveredProductHandler = (productId) =>{
        const newStock = parseFloat(stock) - 1;
        const newSold = parseFloat(Sold) + 1;
        const updateProduct = {...product,Sold:newSold,stock: newStock }
        setProduct(updateProduct);
        
        const proceed = window.confirm('Are you sure want to deliver?');
        if(proceed){
            const url = `https://pure-dawn-30525.herokuapp.com/bike/${productId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(updateProduct)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('success', data);
                
            })
        }
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
                        <p>Stock: {product.stock} </p>
                        <p>Sold: {product.Sold} </p>
                        
                        <button className='btn btn-secondary' onClick={()=>deliveredProductHandler(product._id)}>Delivered</button>
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;