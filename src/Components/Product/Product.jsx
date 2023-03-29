import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handelAddToCart = props.handelAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}star</p>
            </div>
            <button onClick={()=> handelAddToCart(props.product)} className='btn-cart'>ADD To Cart</button>

        </div>
    );
};

export default Product;