import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import Category from './Pages/Category';
import Layout from './Component/Layout';
import Products from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
