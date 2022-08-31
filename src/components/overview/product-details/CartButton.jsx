import React, { useState } from 'react';
import styled from 'styled-components';

const CartButton = ({ handleCart, quant, sku, openQuantSelect }) => {
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [showQuantModal, setShowQuantModal] = useState(false);

  const handlePlaceholder = () => {
    if (!sku) {
      setShowSizeModal(true);
    } else if (quant === 0) {
      setShowQuantModal(true);
      openQuantSelect();
    }
  };
  const closeModals = () => {
    setShowSizeModal(false);
    setShowQuantModal(false);
  };

  const buttonMessage = 'ADD TO BAG +';
  const addToCart = <Valid onClick={handleCart}>{buttonMessage}</Valid>;
  const placeholder = (
    <Placeholder onClick={handlePlaceholder} onMouseLeave={closeModals}>
      {buttonMessage}
    </Placeholder>
  );
  return (
    <Container>
      {quant ? addToCart : placeholder}
      {showSizeModal ? <Modal>Please select a size</Modal> : null}
      {showQuantModal ? <Modal>Please select a quantity</Modal> : null}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;
const Button = styled.button`
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.color};
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
`;
const Valid = styled(Button)`
  &:hover {
    filter: brightness(120%);
  }
`;
const Placeholder = styled(Button)`
  filter: grayscale(90%);
  cursor: default;
`;
const Modal = styled.div`
  position: absolute;
  padding: 0.5em;
  border: 1px solid ${(props) => props.theme.flavor};
  background-color: ${(props) => props.theme.background};
  border-radius: 4px;
  left: 0;
  top: -100%;
  filter: drop-shadow(1px 1px 2px black);
`;

export default CartButton;
