import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuantSelect = ({ quant, setQuant, maxQuant, sku }) => {
  const [inStock, setInStock] = useState(true);

  useEffect(() => {
    setInStock(sku === null || maxQuant !== 0);
  }, [maxQuant, sku]);

  const quants = [];
  for (let i = 1; i <= maxQuant && i <= 15; i++) {
    quants.push(
      <Option key={i} value={i}>
        {i}
      </Option>
    );
  }

  return (
    <Container>
      {inStock ? (
        <Select value={quant} onChange={(e) => setQuant(e.target.value)}>
          <Option value="0">Quantity</Option>
          {quants}
        </Select>
      ) : (
        <OutOfStock>OUT OF STOCK</OutOfStock>
      )}
    </Container>
  );
};

const Container = styled.div`
  align-self: flex-start;
  flex-basis: 50%;
  display: flex;
`;
const Select = styled.select`
  border-radius: 0;
  border: 1px solid;
  background-color: ${props => props.theme.shadow};
  color: ${props => props.theme.color};
  font-size: 14px;
  padding: 10px;
  position: relative;
`;
const OutOfStock = styled.div`
  border-radius: 0;
  border: 1px solid;
  background-color: ${props => props.theme.shadow};
  font-size: 14px;
  padding: 10px;
`;
const Option = styled.option`
  width: 300px;
`;

export default QuantSelect;
