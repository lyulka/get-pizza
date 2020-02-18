import React from 'react';
import 'antd/dist/antd.css';
import MenuItem from './MenuItem.jsx'

const Menu = ({items, cartContents, setCartContents}) => {
    const divStyle = {
        textAlign: 'center',
        margin: '8px 8px',
        width: '320px'
    };

    const updateQty = (name, qty) => {
        var success = false;
        var newCartContents = cartContents.slice();


        // Loop through cart contents
        newCartContents.map((item) => {
            if (item.name === name) {
                console.log("updating: " + name + " " + qty);
                item.qty = qty;
                setCartContents(newCartContents);
                success = true;
            }
        })

        // if loop exited, then cart item hadn't yet been initialized.
        if (success === false) {
            console.log("initializing: " + name + " " + qty);
            newCartContents.push({
                name: name,
                qty: qty
            })
            setCartContents(newCartContents);
        }
    }

    return (
        <div style={divStyle}>
            <h2>Menu</h2>
            {items.map((item) => {
                return (
                    <MenuItem MenuItem={item} updateQty={updateQty}/> 
                );
            })}
        </div>
    );
}

export default Menu;