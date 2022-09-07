import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleSearch }) => {
  const [searchText, setSearch] = useState("");

  return (
    <Container>
      <div>
        <FontAwesomeIcon
          style={{
            color: "grey",
            position: "relative",
            left: "9px",
            zIndex: "100",
            top: "25px",
          }}
          icon={faSearch}
        />
        <Input
          type="text"
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
  color: black;
  position: relative;
  display: flex;
  border: 1px solid grey;
  border-radius: 5px;
  height: 25px;
  width: 355px;
  padding: 2px 23px 2px 30px;
`;

export default SearchBar;
