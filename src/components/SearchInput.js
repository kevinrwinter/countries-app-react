import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";

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
          onChange={(e) => dispatch(search(e.target.value))}
        />
      </Form>
    </div>
  );
};

export default SearchInput;
