import React from "react";
import styled from "styled-components";
import Cards from '../Cards.jsx';


const RelatedProducts = () => (
  <Container>
    <TitleDiv>Related Products</TitleDiv>
    <InnerContainer>
      <div>◄</div>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <div>►</div>
    </InnerContainer>
    <SlideTracker>
      <div>o--o o--o o--o o--o</div>
    </SlideTracker>
  </Container>
)

const TitleDiv = styled.section`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: larger;
`
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
`
const InnerContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  justify-content: center;
  align-items: center;
`
const SlideTracker = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`


export default RelatedProducts;