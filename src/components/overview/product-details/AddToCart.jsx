import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import QuantSelect from './QuantSelect';
import CartButton from './CartButton';
import api from '../../shared-components/api';

const AddToCart = ({ style }) => {
  const skus = style.skus;
  const sizes = [];
  const [sku, setSku] = useState(null);
  const [maxQuant, setMaxQuant] = useState(0);
  const [quant, setQuant] = useState(0);
  const [fav, setFav] = useState(false);
  const quantRef = useRef(null);


  useEffect(() => {
    setSku(null);
    setMaxQuant(0);
    setQuant(0);
  }, [style]);

  useEffect(() => {
    let maxQuant = 0;
    if(skus[sku]) {
      maxQuant = skus[sku].quantity;
      setMaxQuant(maxQuant);
    }
    setQuant(maxQuant ? 1 : 0);
  }, [sku]);

  const handleQuant = (quant) => {
    setQuant(parseInt(quant));
  }
  const handleCart = () => {
    api.post('cart', {
      sku_id: parseInt(sku),
    }).then(res => console.log('Posted', res))
    .catch(err => console.error(err))
  }
  const openQuantSelect = () => {
    quantRef.current.focus();
  }

  for (let key in skus) {
    sizes.push(
      <SizeOption
        key={key}
        onClick={() => setSku(key)}
        selected={sku === key ? true : false}
      >
        {skus[key].size}
      </SizeOption>
    );
  }

  return (
    <div>
      <SizeAndQuant>
        <SizeContainer>{sizes}</SizeContainer>
        <QuantSelect quant={quant} setQuant={handleQuant} maxQuant={maxQuant} sku={sku} quantRef={quantRef}/>
      </SizeAndQuant>
      <Row>
        <CartButton quant={quant} handleCart={handleCart} sku={sku} openQuantSelect={openQuantSelect}/>
        <Fav onClick={() => setFav(!fav)}>{fav ? '★' : '☆'}</Fav>
      </Row>
    </div>
  );
};

const Button = styled.button`
  border-radius: 0;
  border: 1px solid ${props => props.theme.color};
  background-color: ${props => props.theme.shadow};
  color: ${props => props.theme.color};
  font-size: 14px;
`;
const Fav = styled(Button)`
  margin: 0;
  padding: .2em .5em;
  margin-left: 1em;
  min-height: 100%;
  font-size: 1.5em;
`

const SizeOption = styled.button`
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 3em;
  border-radius: 0;
  border: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  font-size: .9em;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  &:hover {
    filter: brightness(120%);
  }
  background-color: ${(props) => (props.selected ? 'red' : props.theme.shadow)};
`;
const SizeContainer = styled.div`
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
const SizeAndQuant = styled.div`
  margin-top: 1em;
  display: flex;
`;
const Row = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: 1.5em;
`

export default AddToCart;
