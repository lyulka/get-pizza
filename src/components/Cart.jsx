import React from 'react';
import 'antd/dist/antd.css';
import CartItem from './CartItem.jsx'

const Cart = ({items}) => {
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '8px 8px',
        width: '320px'
    };

    return (
        <div style={divStyle}>
            <h2>Cart</h2>
            {items.map((item) => {
                return (
                    <CartItem CartItem={item}/>
                );
            })}
        </div>
    );
}

export default Cart;