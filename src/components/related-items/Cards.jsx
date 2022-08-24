import React from "react";
import styled from "styled-components";


const Cards = () => (
  <Container>
    <h3>Product Name</h3>
    <h4>Product Category</h4>
    <h4>$4,000,000.00</h4>
    <div>★★★☆☆</div>
    <div>Garment Picture</div>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #483030;
  color: light;
  padding: .5em;
  border: 1px solid red;
`

export default Cards;