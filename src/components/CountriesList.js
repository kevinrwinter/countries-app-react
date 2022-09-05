import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { apiUrl } from "../util/api";
import SearchInput from "./SearchInput";
// import FilterCountry from "../FilterCountry/FilterCountry";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");

      if (!res.ok) {
        throw new Error("Something's not right...");
      }

      const data = await res.json();

      // console.log(data);

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async countryName => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );

      if (!res.ok) {
        throw new Error("Unable to find country...");
      }

      const data = await res.json();

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all-countries-container">
      <div className="country-top">
        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>
      </div>
      <div className="country-bottom">
        {isLoading && !error && <h4>Loading...</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country, i) => (
          <div
            key={i}
            className="country-card"
          >
            <div className="country-img">
              <img
                src={country.flags.png}
                alt=""
              />
            </div>
            <div className="country-data">
              <h3>{country.name.common}</h3>
              <h6>
                Languages:{" "}
                {Object.values(country.languages || {}).map((value, i) => (
                  <span key={i}>{(i ? ", " : "") + value}</span>
                ))}
              </h6>

              <h6>
                Currencies:{" "}
                {Object.values(country.currencies || {}).map((value, i) => (
                  <span key={i}>{(i ? ", " : "") + value.name}</span>
                ))}
              </h6>

              <h6>Population: {country.population}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
