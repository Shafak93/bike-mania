import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProduct = (props) => {
    const {_id, name, img, description, stock, price,SupplierName} = props.product

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bike')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])
    
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure want to delete?');
        if(proceed){
            const url = `http://localhost:5000/bike/${id}`
            fetch(url, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining);
            })
        }
    }
    return (
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-md-3'>
                <h5>{_id}</h5>
            </div>
            <div  className='col-md-3'>
                <img className='w-50 border rounded mb-2' src={img} alt="" />
            </div>
            <div  className='col-md-2'>
                <p>{SupplierName}</p>
            </div>
            <div  className='col-md-2'>
                <h6>{price}</h6>
            </div>
            <div  className='col-md-2'>
                <button className='btn btn-danger' onClick={()=>handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default ManageProduct;