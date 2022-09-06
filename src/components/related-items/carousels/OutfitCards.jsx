import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import FiveStarRating from '../../shared-components/Rating.jsx';

const OutfitCards = ({ product, setProductId, outfit, setOutfit }) => {

  const [price, setPrice] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [modalState, setModalState] = useState(false);


  useEffect(() => {
    setPrice(product.price);
    setPhoto(product.photo);
    setName(product.name);
    setCategory(product.category);
  }, [product])



  const removeProduct = (index) => {
    setOutfit([
      ...outfit.slice(0, index),
      ...outfit.slice(index + 1, outfit.length)
    ]);
  }

  const xClickHandler = () => {
    let currIndex;
    outfit.forEach((item, i) => {
      if (item === product) {
        currIndex = i;
      }
    })
    removeProduct(currIndex);
  }



  return (
    <StyledContainer>
      <ImageContainer>
        <img onClick={() => {setProductId(product)}} src={photo} style={{
          maxWidth: 'auto',
          height: '100%'
        }}></img>
        <XButton icon={faCircleXmark} onClick={() => {xClickHandler()}} />
      </ImageContainer>
      <InfoContainer onClick={() => {setProductId(product)}} >
        <div>{name}</div>
        <div>{category}</div>
        <div>${price}</div>
        <div><FiveStarRating score={product.score}/></div>
      </InfoContainer>
    </StyledContainer>
  );
};






const Container = styled.div``;
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => props.theme.shadow};
  color: ${props => props.theme.color};
  padding: 0 0 .5em 0;
  margin: 0 .6em 0 0;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  overflow: hidden;
  max-width: 16em;
  min-width: 16em;
  scroll-snap-align: start;
  border: 2px solid ${props => props.theme.color};
  cursor: pointer;
  position: relative;
`

const XButton = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  color: ${props => props.theme.shadow};
  z-index: 2;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0.2em 0.2em 0 0;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

const ImageContainer = styled.section`
  display: flex;
  max-height: 12em;
  min-height: 12em;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
`
const InfoContainer = styled.section`
  display: flex;
  height: auto;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  max-height: 5.6em;
  min-height: 5.6em;
`


export default OutfitCards;