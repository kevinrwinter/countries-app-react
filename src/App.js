import axios from "axios";
import { useState } from "react";

function App() {
  // const [data, setData] = useState({});
  const [data, setData] = useState([]);

  // const getCountryData = () => {};

  // const fetchFinland = fetch("https://restcountries.com/v3.1/name/finland");

  // Promise.all(fetchFinland)
  //   .then(async (res) => {
  //     const countryResponse = await res.json();

  //     console.log(countryResponse);
  //   })
  //   .catch((err) => console.log(err));

  const url = "https://restcountries.com/v3.1/name/finland";
  // const url = "https://restcountries.com/v3.1/all";

  const getCountryData = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .catch((error) => {
          console.log(error);
        })
        .then((res) => {
          setData(res.data);
          // console.log(res.data);
          console.log(res.data);
          console.log(res.data[0].population);
          // console.log(Object.values(res.data));
          // console.log(Object.values(data));
        });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Countries</h1>
        <input type="text" onChange={(e) => getCountryData(e.target.value)} onKeyDown={getCountryData} />
        <div className="country-card">
          <p>language</p>

          {/* Margit code: */}
          {/* {Object.values(languages || {}).map((value, i) => (
            <span key={i}>{(i ? ", " : "") + value.name}</span>
          ))} */}

          {data.map((country) => (
            // <p>Language: {country.language}</p>
            // <p>Currencies: {country.currencies}</p>
            <p>Population: {country.population}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
