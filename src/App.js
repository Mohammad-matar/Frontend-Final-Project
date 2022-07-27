import Home from './Pages/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Welcome from './Pages/Welcome';
import Category from './Component/Category';
import Layout from './Component/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='/category' element={<Category />} />
        </Route>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
