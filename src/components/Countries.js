import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Spinner } from "react-bootstrap";

import { initializeCountries } from "../features/countries/countriesSlice";
import SearchInput from "./SearchInput";
import CountryCard from "./CountryCard";
import BackToTopBtn from "./BackToTopBtn";

const Countries = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

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
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <SearchInput />
        </Col>
      </Row>
      <Row xs={2} md={3} lg={4} className=" g-3">
        {countriesList
          .filter((c) => {
            return c.name.common.toLowerCase().includes(searchInput.toLowerCase());
          })
          .map((country) => (
            <Col className="mt-5" key={country.name.official}>
              <CountryCard country={country} />
            </Col>
          ))}
      </Row>
      <BackToTopBtn />
    </Container>
  );
};

export default Countries;
