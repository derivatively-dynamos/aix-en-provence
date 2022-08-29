import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
const AddToCart = ({ style }) => {
  const skus = style.skus;
  const sizes = [];
  const [sku, setSku] = useState(null);

  useEffect(() => {
    setSku(null);
  }, [style]);

  for (let key in skus) {
    sizes.push(
      <Option
        key={key}
        onClick={() => setSku(key)}
        selected={sku === key ? true : false}
      >
        {skus[key].size}
      </Option>
    );
  }

  return (
    <div>
      <div>
        <SizeContainer>{sizes}</SizeContainer>
        <Select>
          <option>Quantity</option>
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

const Option = styled.button`
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 3em;
  border-radius: 0;
  border: 1px solid darkgray;
  color: #c0c0c0;
  font-size: 14px;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  &:hover {
    filter: brightness(120%);
  }
  background-color: ${(props) => (props.selected ? 'red' : '#292929')};
`;
const SizeContainer = styled.div`
  margin-top: 1em;
  gap: 1em;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const Slash = styled.img`
  position: absolute;
  aspect-ratio: 1;
  color: white;
  width: 5em;
`;

export default AddToCart;
