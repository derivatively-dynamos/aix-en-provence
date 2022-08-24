import React from "react";
import styled from "styled-components";
import Row from "../../shared-components/Row";
import Col from "../../shared-components/Col";

const ProductInformation = () => (
  <Col>
    <Row>
      <div>★★★☆☆</div>
      <div><a href="">Read all reviews</a></div>
    </Row>
    <H4>CATEGORY</H4>
    <h2>Expanded Product Name</h2>
    <p>$369</p>
  </Col>
)

const H4 = styled.h4`
  margin: 1em .5em;
`


export default ProductInformation;