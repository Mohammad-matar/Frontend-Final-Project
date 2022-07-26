import Home from './Pages/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from 'react';
import './App.css';
import Welcome from './Pages/Welcome';
import Layout from './Component/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
