import React from 'react';
import styled from 'styled-components';

const QuantSelect = ({ quant }) => {
  return (
    <Select>
      <option>Quantity</option>
    </Select>
  );
};

const Select = styled.select`
  border-radius: 0;
  border: 1px solid darkgray;
  background-color: #292929;
  color: #c0c0c0;
  font-size: 14px;
  padding: 10px;
  flex-basis: 50%;
  align-self: flex-start;
`;

export default QuantSelect;
