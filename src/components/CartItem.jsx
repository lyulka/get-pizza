import React from 'react';
import 'antd/dist/antd.css';
import { Button, Popover } from 'antd';
import PopoverContent from './PopoverContent.jsx'

const CartItem = ({CartItem}) => {
    return (
        <Button
            style={{ width: '100%', marginBottom: '8px', textAlign: 'left' }}
            >{CartItem.name}
        </Button>
    );
}

export default CartItem;