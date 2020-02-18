import React from 'react';
import 'antd/dist/antd.css';
import CartItem from './CartItem.jsx'

const Cart = ({cartContents}) => {
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        margin: '8px 8px',
        width: '320px',
    };

    return (
        <div style={divStyle}>
            <h2>Cart</h2>
            {cartContents.map((item) => {
                if (item.qty >= 1) {
                    return (
                        <CartItem CartItem={item} key={item.name}/>
                    );
                }
            })}
        </div>
    );
}

export default Cart;