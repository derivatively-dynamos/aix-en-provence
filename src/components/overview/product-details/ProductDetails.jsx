import React from "react";
import styled from "styled-components";
import AddToCart from "./AddToCart";
import ProductInformation from "./ProductInformation";
import StyleSelector from "./StyleSelector";
import Col from "../../shared-components/Col";

const ProductDetails = () => (
  <Col>
    <h3>Product Details</h3>
    <ProductInformation/>
    <StyleSelector/>
    <AddToCart />
  </Col>
)


export default ProductDetails;