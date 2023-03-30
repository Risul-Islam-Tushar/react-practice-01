import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipingCost = 0;
    for (const product of cart) {
        total = total + product.price;
        shipingCost = shipingCost + product.shipping;
    }

    const tax = total*7/100;


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping:{shipingCost}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h6>Grand Total:</h6>
        </div>
    );
};

export default Cart;