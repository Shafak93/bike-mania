import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = (props) => {
    const {productId} = useParams();
    console.log(productId);
    // const { name, img, description, Quantity, price,SupplierName} = props
    const [product, setProduct] = useState({});
    console.log(product)
    useEffect(()=>{
        const url = `http://localhost:5000/bike/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div>
            <h2>service detail of {productId}</h2>
            <h1>name {product.name}</h1>
        </div>
    );
};

export default UpdateProduct;