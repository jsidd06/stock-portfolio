import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./utils/Routes/Routes";
function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
