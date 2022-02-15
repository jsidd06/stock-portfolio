import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuySellOptionScreen from './views/BuySellOptionScreen/BuySellOptionScreen';
import BuySellScreen from './views/BuySellScreen/BuySellScreen';
import Home from './views/Home/Home'
import LoginScreen from './views/LoginScreen/LoginScreen';
import Portfolio from './views/Portfolio/Portfolio';
import StockScreen from "./views/StockView/StockView"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/stock" element={<StockScreen />} />
        <Route path="/buy_sell" element={<BuySellScreen />} />
        <Route path="/selloption" element={<BuySellOptionScreen />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App