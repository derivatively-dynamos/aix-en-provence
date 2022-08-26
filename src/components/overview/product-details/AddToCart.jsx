import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AddToCart = ({ style }) => {

  const skus = style.skus;
  const sizes = [];

  for(let sku in skus) {
    let size = skus[sku].size;
    sizes.push(<Option key={size} value={sku}>{size}</Option>);
  }

  const [sku, setSku] = useState(null);
  const [quant, setQuant] = useState([]);
  const [userQuant, setUserQuant] = useState(null);

  const handleSkuChange = (e) => {
    const newQuant = [];
    const quantity = skus[e.target.value].quantity;
    for(let i = 1; i <= quantity && i <= 15; i++) {
      newQuant.push(<Option key={i} value={i}>{i}</Option>)
    }
    setSku(e.target.value);
    setQuant(newQuant);
  }

  return (
    <div>
      <div>
        <Select onChange={handleSkuChange}>
          <Option value={null}>SELECT SIZE</Option>
          {sizes}
        </Select>
        <Select onChange={(e) => setUserQuant(e.target.value)}>
          {quant}
        </Select>
      </div>
      <div>
        <Button>ADD TO BAG +</Button>
        <Button>☆</Button>
      </div>
    </div>
  );
};

const Button = styled.button`
  border-radius: 0;
  border: 1px solid darkgray;
  background-color: #292929;
  color: #c0c0c0;
  font-size: 14px;
  padding: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;

const Select = styled.select`
  border-radius: 0;
  border: 1px solid darkgray;
  background-color: #292929;
  color: #c0c0c0;
  font-size: 14px;
  padding: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;

const Option = styled.option`
  border-radius: 0;
  border: 1px solid darkgray;
  background-color: #292929;
  color: #c0c0c0;
  font-size: 14px;
  padding: 10px;
`;

export default AddToCart;
