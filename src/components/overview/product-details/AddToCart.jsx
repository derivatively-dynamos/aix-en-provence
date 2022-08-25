import React from 'react';
import styled from 'styled-components';

const AddToCart = ({ style }) => {

  const sizes = [];
  for(let key in style.skus) {
    sizes.push(<Option key={style.skus[key].size}>{style.skus[key].size}</Option>);
  }

  return (
    <div>
      <div>
        <Select>
          <Option>SELECT SIZE</Option>
          {sizes}
        </Select>
        <Button>1 v</Button>
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
