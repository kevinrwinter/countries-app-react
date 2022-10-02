import React from "react";
import { StyledHome } from "./styled/components";

const Home = () => {
  return (
    <div className="container">
      <StyledHome />
      <div className="home-text">
        <span className="bold">Countries App </span>is a simple web application made with{" "}
        <span className="bold">React</span> and <span className="bold">Redux Toolkit</span> in Business College Helsinki
        lessons. The app uses data from the public APIs{" "}
        <a href="https://restcountries.com/" target="_blank" rel="noreferrer">
          restcountries.com
        </a>{" "}
        and{" "}
        <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
          openweathermap.org
        </a>
      </div>
    </div>
  );
};

export default Home;
