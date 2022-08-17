import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Category from './Pages/Category';
import Layout from './Component/Layout';
import Products from "./Pages/Product";
// import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Footer from "./Component/Footer";
import CategoryProducts from "./Pages/CategoryProducts";
import Bundle from "./Pages/Bundle";
import BundleCart from "./Pages/BundleCart";
import DashboardCat from "./Dashboard/Category";
import BundleDB from "./Dashboard/Bundle";
import Productdb from "./Dashboard/Product";
import Order from "./Dashboard/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='category' >
            <Route index element={<Category />} ></Route>
            {/* subroute for the category products */}
            <Route path=":categoryID" element={<CategoryProducts />}></Route>
          </Route>

          {/* <Route path='/products' element={<Products />} /> */}

          <Route path='products' >
            <Route index element={<Products />} ></Route>
            {/* subroute for the category products */}
            {/* <Route path=":cartID" element={<Cart />}></Route> */}
          </Route>

          <Route path='/cart' element={<BundleCart />} />

          <Route path='bundles'>
            <Route index element={<Bundle />}></Route>
          </Route>

          <Route path='/contact' element={<Contact />} />
          <Route path="/about" element={<Welcome />} />
        </Route>

        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/category" element={<DashboardCat />} />
        <Route path="/dashboard/bundle" element={<BundleDB />} />
        <Route path="/dashboard/product" element={<Productdb />} />
        <Route path="/dashboard/order" element={<Order />} />
        <Route path="/*" element={<div>not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
