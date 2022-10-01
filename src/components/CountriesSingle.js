import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Container, Image, Row, Spinner, Button } from "react-bootstrap";

const CountriesSingle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state.country;
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log(country);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
      )
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      })
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      });
  }, [country]);

  if (loading) {
    return (
      <Col className="text-center m-5">
        <Spinner animation="border" role="status" className="center" variant="info">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    );
  }

  return (
    <Container>
      <Row className="m-5">
        <Col>
          {" "}
          <Image thumbnail src={`https://source.unsplash.com/featured/1600x900?${country.capital}`}></Image>
        </Col>
        <Col>
          <h2 className="display-4">{country.name.common}</h2>

          <h3>{country.capital}</h3>

          {!error && (
            <div>
              <p>
                Right now it is <strong>{parseInt(weather.main.temp)} </strong>
                degrees in {country.capital} and {weather.weather[0].description}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            </div>
          )}
        </Col>
      </Row>
      <Row className="m-5">
        <Col>
          {/* <Button variant="light" onClick={() => navigate(-1)}> */}
          <Button variant="light" onClick={() => navigate("/countries")}>
            Back to countries
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CountriesSingle;
