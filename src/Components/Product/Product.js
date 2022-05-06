import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, description, Quantity, price,SupplierName} = props.product
    return (
        <div className=' g-4 col-12 col-md-6 col-lg-4  mb-4'>
            <div className="service-box card text-center" >
                <img src={img} className="card-img-top mx-auto" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price:${price}</p>
                    <p>Quantity:{Quantity}</p>
                    <p>Supplier Name:{SupplierName}</p>
                    <Link to='/checkout' className=' btn btn-primary'>Update Product</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;