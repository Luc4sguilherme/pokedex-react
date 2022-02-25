import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./global.css";

import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";

function RoutesContainer() {
  return (
    <BrowserRouter basename="/pokedex-react">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesContainer;
