import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Countries from "./components/Countries";
import CountriesSingle from "./components/CountriesSingle";
import CountriesFavourites from "./components/CountriesFavourites";
import Layout from "./pages/Layout";

import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "./features/countries/countriesSlice";
import { updateLocalStorage } from "./features/favourites/favouritesSlice";

const App = () => {
  const dispatch = useDispatch();

  const favouritesData = useSelector((state) => state.favourites);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateLocalStorage(favouritesData));
  }, [dispatch, favouritesData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:single" element={<CountriesSingle />} />
          <Route path="/favourites" element={<CountriesFavourites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
