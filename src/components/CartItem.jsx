import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const CartItem = ({CartItem}) => {
    const qtyStyle = {
        display: 'inline',
        float: 'right',
        marginBottom: '0px',
        color: '#7cb305',
        fontWeight: 'bold'
    }

    return (
        <Button style={{width: '100%', marginBottom: '8px'}}>
            <p style={{ display: 'inline' }}>{CartItem.name}</p>
            <p style={qtyStyle}>{"Quantity: " + CartItem.qty}</p>
        </Button>
    );
}

export default CartItem;