import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import BuyOptionScreen from '../../views/BuyOptionScreen/BuyOptionScreen';
import BuySellScreen from '../../views/BuySellScreen/BuySellScreen';
import GraphScreen from '../../views/GraphScreen/GraphScreen';
import Home from '../../views/Home/Home';
import LoginScreen from '../../views/LoginScreen/LoginScreen';
import Portfolio from '../../views/Portfolio/Portfolio';
import SellOptionScreen from '../../views/SellOptionScreen/SellOptionScreen';
import StockView from '../../views/StockView/StockView';

function AllRoutes() {
    const token = localStorage.getItem("token");
  return (
    <Routes>
      {token && (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/stock-view" element={<StockView />} />
          <Route path="/buy-sell/:company" element={<BuySellScreen />} />
          <Route path="/buy-option/:company" element={<BuyOptionScreen />} />
          <Route path="/sell-option/:id" element={<SellOptionScreen />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/graph" element={<GraphScreen />} />
        </>
      )}
      {!token && <Route path="/login" element={<LoginScreen />} />}
      <Route
        path="*"
        element={token ? <Navigate to="/" /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default AllRoutes