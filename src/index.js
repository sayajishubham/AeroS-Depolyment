import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import { SearchProvider } from './Context/Search';
import { WishListContextProvider } from './Context/WishListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WishListContextProvider>
  <SearchProvider>
  <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
  </SearchProvider>
  </WishListContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
