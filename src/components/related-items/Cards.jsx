import React, { useState, useRef } from "react";
import styled from "styled-components";
import Modal from "./carousels/Modal.jsx";

const Cards = () => {
  const [modalState, setModalState] = useState(false);

  const positionRef = useRef(null);
  const [posStateTop, setPosStateTop] = useState(0);
  const [posStateLeft, setPosStateLeft] = useState(0);
  const modalEnterHandler = (boolean) => {
    setPosStateTop(positionRef.current.offsetTop);
    setPosStateLeft(positionRef.current.offsetLeft);
    setModalState(boolean);
  };



  return (
    <StyledContainer onMouseLeave={() => {setModalState(false)}}>
      <ImageContainer>
        <img src="https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
      </ImageContainer>
      <InfoContainer onMouseEnter={() => {modalEnterHandler(true)}} ref={positionRef}>
        <div>Morning Joggers</div>
        <div>Pants</div>
        <div>$40.00</div>
        <div>★★★☆☆</div>
      </InfoContainer>
      <Modal modalState={modalState} posTop={posStateTop} posLeft={posStateLeft} />
    </StyledContainer>
  );
};






const Container = styled.div``;
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #925353;
  color: light;
  padding: 0 0 .5em 0;
  margin: 0 .3em 0 .3em;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  overflow: hidden;
  max-width: 14em;
  min-width: 14em;
  scroll-snap-align: start;
  border-radius: 1%;
`

const ImageContainer = styled.section`
  display: flex;
  height: auto;
  overflow: hidden;
  margin: 0;
  padding: 0;
`
const InfoContainer = styled.section`
  display: flex;
  height: auto;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`


export default Cards;

