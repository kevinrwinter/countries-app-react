import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
// import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import { addFavourite, removeFavourite } from "../features/favourites/favouritesSlice";

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={country.flags.svg}
        className="rounded h-50"
        style={{
          objectFit: "cover",
          minHeight: "200px",
          maxHeight: "200px",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <ListGroup>
          <Card.Title>
            {/* {favourites.some((item) => item.name.common === country.name.common) ? ( */}
            {favourites.map((name) => name.name.common).includes(country.name?.common) ? (
              <Button className="me-3" variant="light" onClick={() => dispatch(removeFavourite(country))}>
                <i className="bi bi-star-fill"></i>
              </Button>
            ) : (
              <Button className="me-3" variant="light" onClick={() => dispatch(addFavourite(country))}>
                <i className="bi bi-star"></i>
              </Button>
            )}

            {country.name.common}
          </Card.Title>
        </ListGroup>
        <Card.Subtitle className="mb-5 text-muted">{country.name.official}</Card.Subtitle>

        <ListGroup variant="flush" className="flex-grow-1 justify-content-end">
          <ListGroup.Item>
            <i className="bi bi-translate me-2"></i>

            {Object.values(country.languages || {}).join(", ")}
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="bi bi-cash-coin me-2"></i>

            {Object.values(country.currencies || {})
              .map((currency) => currency.name)
              .join(", ")}
          </ListGroup.Item>

          <ListGroup.Item>
            <i className="bi bi-people me-2"></i>
            {country.population}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <LinkContainer to={`/countries/${country.name.common}`} state={{ country: country }}>
        <Button variant="link">See more</Button>
      </LinkContainer>
    </Card>
  );
};

export default CountryCard;
