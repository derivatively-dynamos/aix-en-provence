import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuantSelect = ({ quant, setQuant, maxQuant, sku }) => {

  const [inStock, setInStock] = useState(true);
  useEffect(() => {
    if(sku) {
      if(maxQuant === 0) {
        setInStock(false);
      }
    } else {
      setInStock(true);
    }
  }, [quant, sku])
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
      {maxQuant === 0 && sku !== null ? (
        <OutOfStock>OUT OF STOCK</OutOfStock>
      ) : (
        <Select value={quant} onChange={(e) => setQuant(e.target.value)}>
          <Option value="0">Quantity</Option>
          {quants}
        </Select>
      )}
    </Container>
  );
};

const Container = styled.div`
  align-self: flex-start;
  flex-basis: 50%;
  color: #c0c0c0;
  font-size: 14px;
  display: flex;
`;
const Select = styled.select`
  border-radius: 0;
  border: 1px solid darkgray;
  background-color: #292929;
  color: #c0c0c0;
  font-size: 14px;
  padding: 10px;
  position: relative;
`;
const OutOfStock = styled.div`
  border-radius: 0;
  border: 1px solid darkgray;
  background-color: #292929;
  color: #c0c0c0;
  font-size: 14px;
  padding: 10px;
`;
const Option = styled.option`
  width: 300px;
`;

export default QuantSelect;
