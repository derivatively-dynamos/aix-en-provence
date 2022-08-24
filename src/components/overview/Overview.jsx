import React from 'react';
import styled from 'styled-components';
import ImageGallery from './image-gallery/ImageGallery';
import ProductDetails from './product-details/ProductDetails';
import Row from '../shared-components/Row';

const Overview = () => {

  return (
    <Row>
      <ImageGallery/>
      <ProductDetails/>
    </Row>
  )
}

export default Overview;