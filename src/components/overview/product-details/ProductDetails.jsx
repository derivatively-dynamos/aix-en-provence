import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddToCart from "./AddToCart";
import ProductInformation from "./ProductInformation";
import StyleSelector from "./StyleSelector";
import InfoList from "./InfoList";

const ProductDetails = ({ product, styles, style, setStyle, styleIndex, score }) => {
  return (
    <Container>
      <ProductInformation product={product} style={style} score={score} />
      <StyleSelector
        styles={styles}
        style={style}
        setStyle={setStyle}
        styleIndex={styleIndex}
      />
      <AddToCart style={style} />
      <InfoList features={product.features}/>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.5em;
  padding-left: 1em;
  border: none;
  flex-basis: 30%;
`;

export default ProductDetails;
