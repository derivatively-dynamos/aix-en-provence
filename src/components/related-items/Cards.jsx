import React, { useState, useRef } from "react";
import styled from "styled-components";
import Modal from "./carousels/Modal.jsx";

const Cards = () => {
  const [modalState, setModalState] = useState(false);
  // const [topOffset, setTopOffset] = useState(0);
  // const [leftOffset, setLeftOffset] = useState(0);
  const positionRef = useRef(null);
  // const posObject = positionRef.current.getBoundingClientRect();
  // console.log(posObject)
  // const mouseEnterHandler = (modalValue) => {
  //   console.log(positionRef.current.offsetTop);
  //   setModalState(modalValue);
  // }

  return (
    <Container onMouseLeave={() => {setModalState(false)}}>
      <Modal modalState={modalState} />
      <ImageContainer>
        <img src="https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
      </ImageContainer>
      <InfoContainer onMouseEnter={() => {setModalState(true)}} ref={positionRef}>
        <div>Morning Joggers</div>
        <div>Pants</div>
        <div>$40.00</div>
        <div>★★★☆☆</div>
      </InfoContainer>
    </Container>
  );
};





// const OuterContainer = styled.section`
//   display:flex;
//   flex-grow: 1;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   position: relative;
//   overflow: visible;
// `
const Tainer = styled.a``;
const Container = styled(Tainer)`
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
  max-width: 16em;
  min-width: 16em;
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

// transition: all .2s;
// &:hover {
//   transform: scale(1.02);
// }