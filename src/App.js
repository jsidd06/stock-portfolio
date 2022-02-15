import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import NavBarScreen from './views/NavBarScreen/NavBarScreen';

function App() {
  return (
    <BrowserRouter>
      <NavBarScreen />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App