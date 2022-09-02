import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearch] = useState("");

  return (
    <Container>
      <h3>HAVE A QUESTION? SEARCH FOR ANSWERS...</h3>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            const text = e.target.value;
            setSearch(text);
            handleSearch(text);
          }}
          value={searchText}
        />
        <i>🕵️‍♀️</i>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #7e7e7e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default SearchBar;
