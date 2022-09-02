import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedProducts from './carousels/RelatedProducts.jsx';
import YourOutfit from './carousels/YourOutfit.jsx';
import api from '../shared-components/api';

const RelatedItems = ({ productId, setProductId }) => {

  const [currProductInfo, setCurrProductInfo] = useState({
    name: '',
    category: '',
    price: '',
    photo: ''
  })
  useEffect(() => {
    api.get(`products/${productId}`)
    .then(res => {
      setCurrProductInfo(prevState => ({
        ...prevState,
        name: res.data.name,
        category: res.data.category
      }));
      return api.get(`products/${productId}/styles`)
    })
    .then(res => {
      setCurrProductInfo(prevState => ({
        ...prevState,
        price: res.data.results[0]['original_price'],
        photo: res.data.results[0].photos[0]['thumbnail_url']
      }));
    })
    .catch(err => console.error(err))
  }, [productId])

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
  padding: 0.5em;
  background-color: #153A51;
`

export default RelatedItems;