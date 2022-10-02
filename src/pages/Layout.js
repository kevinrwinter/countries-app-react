import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";

const Layout = () => {
  const favourites = useSelector((state) => state.favourites);
  return (
    <Container fluid>
      <Row>
        <Navbar bg="white" variant="light" className="shadow p-3 mb-1 bg-white" fixed="top">
          <Container className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <LinkContainer to="/">
                  <Nav.Link className="me-2">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/countries">
                  <Nav.Link className="me-2">Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/favourites">
                  <Nav.Link className="me-2">
                    Favourites <i className="bi bi-star-fill"></i>{" "}
                    {favourites.length > 0 ? `(${favourites.length})` : `(0)`}
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default Layout;
