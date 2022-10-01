import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { search } from "../features/countries/countriesSlice";

const SearchInput = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Form>
        <Form.Control
          style={{ width: "18rem" }}
          type="search"
          className="me-2 "
          placeholder="Search for countries"
          aria-label="Search"
          // onChange={(e) => setSearch(e.target.value)}
          onChange={(e) => dispatch(search(e.target.value))}
        />
        <p>clear search</p>
      </Form>
    </div>
  );
};

export default SearchInput;
