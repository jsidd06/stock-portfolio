import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuySellScreen from './views/BuySellScreen/BuySellScreen';
import Home from './views/Home/Home'
import LoginScreen from './views/LoginScreen/LoginScreen';
import StockScreen from "./views/StockView/StockView"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/stock" element={<StockScreen />} />
        <Route path="/buy_sell" element={<BuySellScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App