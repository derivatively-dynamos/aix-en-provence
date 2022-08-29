import React from 'react';
import styled from 'styled-components';
import Row from '../../shared-components/Row';
import Col from '../../shared-components/Col';

const ProductInformation = ({
  product: { category, name, description },
  style: { original_price, sale_price },
}) => (
  <Col>
    <Row>
      <div>★★★☆☆</div>
      <div>
        <a href="">Read all reviews</a>
      </div>
    </Row>
    <H4>{category}</H4>
    <H2>{name}</H2>
    <H4>
      <ProductPrice original_price={original_price} sale_price={sale_price} />
    </H4>
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

const H4 = styled.h4`
  margin: 0;
  padding: 0;
`;
const H2 = styled.h2`
  margin-top: 5px;
  margin-bottom: 0px;
`;
const Sale = styled.span`
  color: ${props => props.theme.sale}
`;

export default ProductInformation;
