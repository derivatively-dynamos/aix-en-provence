import React from "react";
import DefaultView from "./DefaultView";
import styled from "styled-components";

const ImageGallery = () => (
  <Container>
    <h3>Image Gallery</h3>
    <DefaultView/>
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

export default ImageGallery;