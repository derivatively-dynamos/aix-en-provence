import React from 'react';
import DefaultView from './DefaultView';
import styled from 'styled-components';

const ImageGallery = ({ style, product, setIndex, index, setPopover }) => (
  <Container>
    <DefaultView
      photos={[...style.photos]}
      product={product}
      setIndex={setIndex}
      index={index}
      setPopover={setPopover}
    />
  </Container>
);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
  background-color: #313131;
  color: lightgray;
  padding: 0.5em;
  border: 1px solid red;
`;

export default ImageGallery;
