import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearch] = useState("");

  return (
    <Container>
      <div>
        <Input
          type="text"
          icon="fa-solid fa-magnifying-glass"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          onChange={(e) => {
            const text = e.target.value;
            setSearch(text);
            handleSearch(text);
          }}
          value={searchText}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Input = styled.input`
  color: ${(props) => props.theme.color};
  position: relative;
  display: flex;
  border: 1px solid grey;
  border-radius: 5px;
  height: 25px;
  width: 355px;
  padding: 2px 23px 2px 30px;
  outline: 0;
`;

export default SearchBar;
