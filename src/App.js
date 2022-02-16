import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuySellOptionScreen from './views/BuySellOptionScreen/BuySellOptionScreen';
import BuySellScreen from './views/BuySellScreen/BuySellScreen';
import GraphScreen from './views/GraphScreen/GraphScreen';
import Home from './views/Home/Home'
import LoginScreen from './views/LoginScreen/LoginScreen';
import NavBarScreen from './views/NavBarScreen/NavBarScreen';
import Portfolio from './views/Portfolio/Portfolio';
import StockScreen from "./views/StockView/StockView"
function App() {
  return (
    <BrowserRouter>
      <NavBarScreen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/stock" element={<StockScreen />} />
        <Route path="/buy_sell" element={<BuySellScreen />} />
        <Route path="/selloption" element={<BuySellOptionScreen />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/graph" element={<GraphScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App