import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountriesSingle from "./components/CountriesSingle";
import Layout from "./pages/Layout";

import "bootstrap-icons/font/bootstrap-icons.css";
import CountriesList from "./components/CountriesList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/countries/:single" element={<CountriesSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
