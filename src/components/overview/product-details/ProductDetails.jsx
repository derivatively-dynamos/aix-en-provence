import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import ProductInformation from './ProductInformation';
import StyleSelector from './StyleSelector';
import InfoList from './InfoList';
import axios from 'axios';
import { GIT_AUTH, API_URL } from '../../../../config';

import exproduct from './examples/exampleproduct.json';
import exstyles from './examples/examplestyles.json';

const PRODUCT_ID = 37312;
console.log(API_URL);

const ProductDetails = () => {

  const [product, setProduct] = useState(exproduct);
  const [styles, setStyles] = useState(exstyles);
  const [style, setStyle] = useState(exstyles.results[0]);

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/products/${PRODUCT_ID}`, {
  //       headers: {
  //         Authorization: GIT_AUTH,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setProduct(response.data);
  //     })
  //     .catch(err => console.log(err))
  // },
  // []);

  return (
    <Container>
      <ProductInformation product={product} style={style} />
      <StyleSelector />
      <AddToCart />
      <InfoList />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #313131;
  color: lightgray;
  padding: 0.5em;
  border: 1px solid cyan;
`;

export default ProductDetails;
