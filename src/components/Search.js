import React from "react";
import { DebounceInput } from "react-debounce-input";

const Search = (props) => {
  return (
    <DebounceInput
      minLength={2}
      className="search"
      placeholder="Search Products..."
      style={{
        width: "1000px",
      }}
      debounceTimeout={500}
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
};

export default Search;
