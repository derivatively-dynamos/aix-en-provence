import React from "react";
import styled from "styled-components";
import AddToCart from "./AddToCart";
import ProductInformation from "./ProductInformation";
import StyleSelector from "./StyleSelector";
import InfoList from "./InfoList";

const ProductDetails = () => (
  <Container>
    <ProductInformation/>
    <StyleSelector/>
    <AddToCart />
    <InfoList />
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  border: 1px solid cyan;
`


export default ProductDetails;