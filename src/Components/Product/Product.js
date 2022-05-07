import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {_id, name, img, description, stock, price,SupplierName} = props.product
    // console.log(stock, SupplierName);
    const navigate = useNavigate();
    const navigateToUpdateProduct = _id =>{
        navigate(`/product/${_id}`)
    }
    return (
        <div className=' g-4 col-12 col-md-6 col-lg-4  mb-4'>
            <div className="service-box card text-center" >
                <img src={img} className="card-img-top mx-auto" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price:${price}</p>
                    <p>Stock:{stock}</p>
                    <p>Supplier Name:{SupplierName}</p>
                    <button onClick={()=>navigateToUpdateProduct(_id)} className='btn btn-primary'>Update Product</button>
                </div>
            </div>
        </div>
    );
};

export default Product;