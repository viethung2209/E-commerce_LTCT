import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Component/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Component/Home/Home";
import ShopDetail from "./Component/Shop Details/ShopDetail";
import Checkout from "./Component/Page/Checkout/Checkout";
import Card from "./Component/Page/Card/Card";
import Contact from "./Component/Contact/Contact";
import Shop from "./Component/Shop/Shop";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="shop-detail" element={<ShopDetail/>}/>
              <Route path="pages/checkout" element={<Checkout/>}/>
              <Route path="pages/shopping-card" element={<Card/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="shop" element={<Shop/>}/>
          </Route>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();