import React from "react";
import styled from "styled-components";
import Cards from '../Cards.jsx';


const YourOutfit = () => (
  <Container>
    <h3>Your Outfit</h3>
    <InnerContainer>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </InnerContainer>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  border: 1px solid red;
`
const InnerContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  border: 1px solid red;
`

export default YourOutfit;