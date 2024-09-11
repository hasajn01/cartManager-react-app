import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './app.css'
import Main from './components/Main'
import Cart from './components/Cart'

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addItem = (item) => {
    const newItem = { ...item, cartId: Date.now() }; 
    setCartItem([...cartItem, newItem]);
  };

  const removeItem = (cartId) => {
    setCartItem(cartItem.filter(product => product.cartId !== cartId));
  };

  return (
    <>
      <header>
        <nav className='navigation-menu'>
          <div><Link to='/' className='text'> UNICODE-SHOP </Link></div>
          <div><Link to='/cart'> <img src='/assets/img/cart-m.png' alt='cart' width={63} height={63}/></Link></div>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Main addItem={addItem} />} />
        <Route path='/cart' element={<Cart cartItem={cartItem} removeItem={removeItem} />} />
      </Routes>
    </>
  );
}

export default App;
