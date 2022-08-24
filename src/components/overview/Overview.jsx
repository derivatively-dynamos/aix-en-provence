import React from 'react';
import styled from 'styled-components';
import ImageGallery from './image-gallery/ImageGallery';
import ProductDetails from './product-details/ProductDetails';

const Overview = () => {

  return (
    <Container>
      <ImageGallery/>
      <ProductDetails/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
  background-color: #7e7e7e;
`

export default Overview;