import React from "react";
import styled from "styled-components";
import AddToCart from "./AddToCart";
import ProductInformation from "./ProductInformation";
import StyleSelector from "./StyleSelector";

const ProductDetails = () => (
  <Container>
    <ProductInformation/>
    <StyleSelector/>
    <AddToCart />
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  border: 1px solid cyan;
`


export default ProductDetails;