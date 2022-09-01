import React from 'react';
import styled from 'styled-components';
import RelatedProducts from './carousels/RelatedProducts.jsx';
import YourOutfit from './carousels/YourOutfit.jsx';

const RelatedItems = ({ productId, setProductId }) => {

  return (
    <RICDiv>
      <RelatedProducts productId={productId} setProductId={setProductId} />
      <YourOutfit productId={productId}/>
    </RICDiv>
  )
}

const RICDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5em;
  background-color: #7e7e7e;
`

export default RelatedItems;