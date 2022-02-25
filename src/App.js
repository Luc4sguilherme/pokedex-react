import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./global.css";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function RoutesContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesContainer;
