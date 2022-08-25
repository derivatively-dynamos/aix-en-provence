import React from "react";
import DefaultView from "./DefaultView";
import styled from "styled-components";

const ImageGallery = ({style, product}) => (
  <Container>
    <DefaultView photos={[...style.photos, ...style.photos]} product={product}/>
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 70%;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  border: 1px solid red;
`

export default ImageGallery;