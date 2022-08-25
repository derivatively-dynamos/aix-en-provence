import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <Container>
      <h3>HAVE A QUESTION? SEARCH FOR ANSWERS...</h3>
      <div>
        <input type="search" placeHolder="Search..." />
        <button type="submit">Search</button>
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
