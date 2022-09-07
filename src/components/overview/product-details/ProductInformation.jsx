import React from 'react';
import styled from 'styled-components';
import Rating from '../../shared-components/Rating';

const ProductInformation = ({
  product: { category, name, description },
  style: { original_price, sale_price },
  score
}) => (
  <Col>
    <Wrapper>
      <Row>
        <Rating score={score}/>
        <div>
          <A href="#reviews">Read all reviews</A>
        </div>
      </Row>
      <ProductInfo>
        <CatAndName>
          <H4>{category}</H4>
          <H2>{name}</H2>
        </CatAndName>
      <H4>
        <ProductPrice original_price={original_price} sale_price={sale_price} />
      </H4>
      </ProductInfo>
    </Wrapper>
  </Col>
);

const ProductPrice = ({ original_price, sale_price }) => {
  let display = <div>${original_price}</div>;
  if (sale_price) {
    display = (
      <div>
        <del>${original_price}</del> <Sale>${sale_price}</Sale>
      </div>
    );
  }

  return display;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    align-items: center;
  }
`
const H4 = styled.h4`
  font-weight: 300;
  margin: 0;
  padding: 0;
  margin-top: .5em;
`;
const H2 = styled.h2`
  margin-top: 5px;
  margin-bottom: 0px;
`;
const Sale = styled.span`
  color: ${props => props.theme.sale}
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`
const CatAndName = styled.div`
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px){
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: .5em;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`
const A = styled.a`
  color: ${props => props.theme.color};
`

export default ProductInformation;
