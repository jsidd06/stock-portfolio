import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import BuyOptionScreen from "./views/BuyOptionScreen/BuyOptionScreen";
import BuySellScreen from "./views/BuySellScreen/BuySellScreen";
import GraphScreen from "./views/GraphScreen/GraphScreen";
import Home from "./views/Home/Home";
import LoginScreen from "./views/LoginScreen/LoginScreen";
import Portfolio from "./views/Portfolio/Portfolio";
import SellOptionScreen from "./views/SellOptionScreen/SellOptionScreen";
import StockScreen from "./views/StockView/StockView";
function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {token && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<StockScreen />} />
            <Route path="/buy_sell/:company" element={<BuySellScreen />} />
            <Route path="/buyoption/:company" element={<BuyOptionScreen />} />
            <Route path="/selloption/:id" element={<SellOptionScreen />} />
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
    </BrowserRouter>
  );
}

export default App;
