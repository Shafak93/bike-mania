import React from 'react';
import { Table } from 'react-bootstrap';

const ManageProduct = (props) => {
    const {_id, name, img, description, stock, price,SupplierName} = props.product
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
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};

export default ManageProduct;