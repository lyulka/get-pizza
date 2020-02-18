import React from 'react';
import { useState } from 'react';
import LogoPizza from './images/pizza.svg';
import PizzaMenu from './server/pizzas.json';

import Menu from './components/Menu.jsx';
import Cart from './components/Cart.jsx';

import 'antd/dist/antd.css';
import './App.css';

const App = () => {
  const [ cartContents, setCartContents ] = useState([]);

  return (
    <div className="App">
      <header>
        <img className="header-logo" src={LogoPizza} alt="Stylised pizza logo"/>
        <h1 className="header-title">Get pizza</h1>
      </header>
      <div className="order-container">
        <Menu items={PizzaMenu}/>
        <Cart items={cartContents}/>
      </div>
    </div>
  );
}

export default App;
