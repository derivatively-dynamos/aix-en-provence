import React from 'react';
import DefaultView from './DefaultView';
import styled from 'styled-components';

const ImageGallery = ({ style, product, setIndex, index, setPopover, lastIndex }) => (
  <Container>
    <DefaultView
      photos={[...style.photos]}
      product={product}
      setIndex={setIndex}
      index={index}
      setPopover={setPopover}
      lastIndex={lastIndex}
    />
  </Container>
);

const Container = styled.section`
  color: ${props => props.theme.highlight};
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
  padding: 0.5em;
  border: none;
`;

export default ImageGallery;
