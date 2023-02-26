import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BrowseBy from "./pages/BrowseBy";
import Stories from "./pages/Stories";
import Agents from "./pages/Agents";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/browseby" element={<BrowseBy />} />
          <Route exact path="/stories" element={<Stories />} />
          <Route exact path="/agents" element={<Agents />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
