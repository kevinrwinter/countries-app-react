import { Route, Routes } from "react-router-dom";

import CountriesList from "./components/CountriesList";
// import CountrySingle from "./components/CountrySingle";

// import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h5>Countries App</h5>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<CountriesList />}
          />
          {/* <Route
            path="/country/:countryName"
            element={<CountrySingle />}
          /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
