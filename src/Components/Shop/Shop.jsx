import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handelAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='product-section'>

                {
                    products.map(product => <Product key={product.id} product={product}
                    handelAddToCart = {handelAddToCart}></Product>)
                }

            </div>
            <div className='cart-section'>
               <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;