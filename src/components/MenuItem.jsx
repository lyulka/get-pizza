import React from 'react';
import 'antd/dist/antd.css';
import { Button, Popover } from 'antd';
import PopoverContent from './PopoverContent.jsx'

const MenuItem = ({MenuItem}) => {
    return (
        <Popover 
            content={
                <PopoverContent 
                    ingredients={MenuItem.ingredients}
                    price={MenuItem.price}/>
            }
            title={MenuItem.name}
            trigger="hover"
            key={MenuItem.name}
            >
            <Button
                style={{ width: '100%', marginBottom: '8px', textAlign: 'left' }}
                >{MenuItem.name}
            </Button>
        </Popover>
    );
}

export default MenuItem;