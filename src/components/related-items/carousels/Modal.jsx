import React from "react";
import styled from "styled-components";

const Modal = ({ modalState, posTop, posLeft, price, name, photo, category, currProductInfo, setModalState }) => {


  if (!modalState) {
    return null;
  } else {
    return (
      <div>
        <Overlay onClick={() => {setModalState(false)}} />
        <Container >
          <ImagesContainer>
            <ImageContainer>
              <img src={currProductInfo.photo}></img>
            </ImageContainer>
            <ImageContainer>
              <img src={photo}></img>
            </ImageContainer>
          </ImagesContainer>
          <InfoContainer>
            <StyleTable>
              <StyleCaption>Product Comparison</StyleCaption>
              <tbody>
                <tr>
                  <StyleTh>{currProductInfo.name}</StyleTh>
                  <StyleTh2>Product</StyleTh2>
                  <StyleTh>{name}</StyleTh>
                </tr>
                <tr>
                  <StyleTh>{currProductInfo.category}</StyleTh>
                  <StyleTh2>Category</StyleTh2>
                  <StyleTh>{category}</StyleTh>
                </tr>
                <tr>
                  <StyleTh>${currProductInfo.price}</StyleTh>
                  <StyleTh2>Price</StyleTh2>
                  <StyleTh>${price}</StyleTh>
                </tr>
                <tr>
                  <StyleTh>★★★☆☆</StyleTh>
                  <StyleTh2>Rating</StyleTh2>
                  <StyleTh>★★★☆☆</StyleTh>
                </tr>
              </tbody>
            </StyleTable>
          </InfoContainer>
        </Container>
      </div>
    );
  }
};

const StyleTable = styled.table`
  background-color: ${props => props.theme.shadow};
  border: 2px solid ${props => props.theme.color};
  border-collapse: collapse;
  margin: 0 .4em .1em .4em;
`
const StyleCaption = styled.caption`
  color: ${props => props.theme.color};
  margin: 0 0 1em 0;
  font-weight: bold;
`
const StyleTh = styled.th`
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
`
const StyleTh2 = styled.th`
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
  font-weight: lighter;
`
const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 4;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
  border: 2px solid ${props => props.theme.color};
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 3;
`

const ImageContainer = styled.section`
  display: flex;
  height: 14em;
  width: auto;
  overflow: hidden;
`
const ImagesContainer = styled.section`
  display: flex;
  flex-direction: row;
  overflow:auto;
  justify-content: space-evenly;
  background-color: ${props => props.theme.background};
`
const InfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: row; */
  background-color: ${props => props.theme.background};
  padding: 1em;
`



export default Modal;