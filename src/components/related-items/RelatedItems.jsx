import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedProducts from './carousels/RelatedProducts.jsx';
import YourOutfit from './carousels/YourOutfit.jsx';
import api from '../shared-components/api';

const RelatedItems = ({ productId, setProductId, product, styles }) => {

  const [currProductInfo, setCurrProductInfo] = useState({
    name: '',
    category: '',
    price: '',
    photo: ''
  })
  useEffect(() => {
    if (styles.length === 0) return;
    setCurrProductInfo(prevState => ({
      ...prevState,
      name: product.name,
      category: product.category
    }));
    setCurrProductInfo(prevState => ({
      ...prevState,
      price: styles[0]['original_price'],
      photo: styles[0].photos[0]['thumbnail_url']
    }));
  }, [product, styles])

  return (
    <RICDiv>
      <RelatedProducts productId={productId} setProductId={setProductId} currProductInfo={currProductInfo} />
      <YourOutfit productId={productId} setProductId={setProductId} currProductInfo={currProductInfo} />
    </RICDiv>
  )
}

const RICDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`

export default RelatedItems;