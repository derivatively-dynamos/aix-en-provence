import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ImageGallery from './image-gallery/ImageGallery';
import ProductDetails from './product-details/ProductDetails';
import axios from 'axios';

import exproduct from './product-details/examples/exampleproduct.json';
import exstyles from './product-details/examples/examplestyles.json';

const PRODUCT_ID = 37312;

const Overview = () => {

  const [product, setProduct] = useState(exproduct);
  const [styles, setStyles] = useState(exstyles.results);
  const [style, setStyle] = useState(exstyles.results[0]);

  const setStyleId = (id) => {
    styles.forEach((style) => {
      if (style.style_id === id) {
        setStyle(style);
      }
    })
  }

  return (
    <Container>
      <ImageGallery/>
      <ProductDetails
        product={product}
        styles={styles}
        style={style}
        setStyle={setStyleId}/>
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