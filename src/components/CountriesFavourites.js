import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import SearchInput from "./SearchInput";

const CountriesFavourites = () => {
  const favourites = useSelector((state) => state.favourites);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

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
        {favourites
          .filter((c) => {
            return c.name.common.toLowerCase().includes(searchInput.toLowerCase());
          })
          .map((country) => (
            <Col className="mt-5" key={country.name.official}>
              <CountryCard country={country} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CountriesFavourites;
