import React from 'react';
import styled from 'styled-components';
import ImageGallery from './image-gallery/ImageGallery';
import ProductDetails from './product-details/ProductDetails';

const Overview = () => {

  return (
    <Row>
      <ImageGallery/>
      <ProductDetails/>
    </Row>
  )
}

const Row = styled.div`
  display: flex;
`

export default Overview;