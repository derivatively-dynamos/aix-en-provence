import React from "react";
import styled from "styled-components";
import AddToCart from "./AddToCart";
import ProductInformation from "./ProductInformation";
import StyleSelector from "./StyleSelector";

const ProductDetails = () => (
  <Col>
    <h3>Product Details</h3>
    <ProductInformation/>
    <StyleSelector/>
    <AddToCart />
  </Col>
)

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

export default ProductDetails;