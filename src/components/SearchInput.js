import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Find a country"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
