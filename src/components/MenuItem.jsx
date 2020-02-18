import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Popover, InputNumber } from 'antd';
import PopoverContent from './PopoverContent.jsx'

const MenuItem = ({MenuItem, updateQty}) => {
    const itemStyle = {
        width: '80%',
        marginRight: '2%',
        marginBottom: '8px',
        textAlign: 'left'
    }

    const qtyStyle = {
        width: '18%'
    }
    
    return (
        <div>
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
                    style={itemStyle}
                    >{MenuItem.name}
                </Button>
            </Popover>
            <InputNumber
                style={qtyStyle}
                defaultValue={0}
                min={0}
                max={20}
                onChange={value => {
                    updateQty(MenuItem.name, value);
                }}
            />
        </div>
    );
}

export default MenuItem;