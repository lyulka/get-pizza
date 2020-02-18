import React from 'react';
import 'antd/dist/antd.css';
import { Button, Popover } from 'antd';
import PopoverContent from './PopoverContent.jsx'
import MenuItem from './MenuItem.jsx'

const Menu = ({items}) => {
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '8px 8px',
        width: '320px'
    };

    return (
        <div style={divStyle}>
            <h2>Menu</h2>
            {items.map((item) => {
                return (
                    <MenuItem MenuItem={item}/> 
                );
            })}
        </div>
    );
}

export default Menu;