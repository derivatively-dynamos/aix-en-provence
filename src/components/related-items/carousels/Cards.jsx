import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal.jsx";
import api from '../../shared-components/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FiveStarRating from '../../shared-components/Rating.jsx';

const Cards = ({ product, setProductId, currProductInfo }) => {

  const [price, setPrice] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [score, setScore] = useState(null);
  const [modalState, setModalState] = useState(false);

  const handleStarClick = (boolean) => {
    setModalState(boolean);
  }

  useEffect(() => {
    api.get(`products/${product}`)
    .then(res => {
      setName(res.data.name);
      setCategory(res.data.category);
    })
    .catch(err => console.error(err))
  }, [product]);

  useEffect(() => {
    api.get(`products/${product}/styles`)
    .then(res => {
      setPrice(res.data.results[0]['original_price']);
      setPhoto(res.data.results[0].photos[0]['thumbnail_url']);
    })
    .catch(err => console.error(err))
  }, [product]);

  useEffect(() => {
    api.get(`reviews/?product_id=${product}`)
    .then(res => {
      let resultScores = [];
      res.data.results.forEach((review) => {
        resultScores.push(review.rating);
      })
      let totalScore = resultScores.reduce((accum, curr) => {
        return accum + curr;
      }, 0);
      let averageScore = totalScore / resultScores.length;
      setScore(averageScore);
    })
    .catch(err => console.error(err))
  }, [product]);




  return (
    <StyledContainer >
      <ImageContainer>
        <img onClick={() => {setProductId(product)}} src={photo} style={{
          maxWidth: 'auto',
          height: '100%'
        }}></img>
        <StarButton icon={faStar} onClick={(event) => {handleStarClick(true)}} />
      </ImageContainer>
      <InfoContainer onClick={() => {setProductId(product)}} >
        <div>{name}</div>
        <div>{category}</div>
        <div>${price}</div>
        <div><FiveStarRating score={score}/></div>
      </InfoContainer>
      <Modal modalState={modalState} price={price} name={name} photo={photo} score={score} category={category} currProductInfo={currProductInfo} setModalState={setModalState} />
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
const StarButton = styled(FontAwesomeIcon)`
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


export default Cards;

