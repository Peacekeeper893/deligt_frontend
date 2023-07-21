
import { useState } from 'react';

import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';
import Hero from './components/Hero';
import MenuSelector from './components/MenuSelector';


function App() {

  const [cartDisplay, setCartDisplay] = useState(false);
  
  function cartDisplayHandler()
  {
    setCartDisplay(true)
  }
  function cartHideHandler()
  {
    setCartDisplay(false)
  }

  return (

    <CartProvider>
      {cartDisplay && <Cart toHide={ cartHideHandler}/>}
      <Navbar onClick={ cartDisplayHandler} />
      <Hero />
      <MenuSelector/>
      
    </CartProvider>

  );
}

export default App;
