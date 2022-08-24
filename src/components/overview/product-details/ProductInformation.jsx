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
    <H2>Expanded Product Name</H2>
    <H4>$369</H4>
  </Col>
)

const H4 = styled.h4`
  margin: 1em 0 0 .5em;
`
const H2 = styled.h2`
  margin-top: 5px;
  margin-bottom: 0px;
`


export default ProductInformation;