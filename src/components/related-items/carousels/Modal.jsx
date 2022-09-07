import React from "react";
import styled from "styled-components";
import FiveStarRating from '../../shared-components/Rating.jsx';

const Modal = ({ modalState, price, name, photo, category, currProductInfo, setModalState, score }) => {


  if (!modalState) {
    return null;
  } else {
    return (
      <div>
        <Overlay onClick={() => {setModalState(false)}} />
        <Container >
          <ImagesContainer>
            <ImageContainer>
              <img src={currProductInfo.photo} style={{
                maxWidth: 'auto',
                maxHeight: 'auto',
                minHeight: '100%',
                minWidth: `100%`
              }}></img>
            </ImageContainer>
            <ImageContainer>
              <img src={photo} style={{
                maxWidth: 'auto',
                maxHeight: 'auto',
                minHeight: '100%',
                minWidth: `100%`
              }}></img>
            </ImageContainer>
          </ImagesContainer>
          <InfoContainer>
            <StyleTable>
              <StyleCaption>Product Comparison</StyleCaption>
              <StyleBody>
                <StyleTr>
                  <StyleTh>{currProductInfo.name}</StyleTh>
                  <StyleTh2>Product</StyleTh2>
                  <StyleTh>{name}</StyleTh>
                </StyleTr>
                <StyleTr>
                  <StyleTh>{currProductInfo.category}</StyleTh>
                  <StyleTh2>Category</StyleTh2>
                  <StyleTh>{category}</StyleTh>
                </StyleTr>
                <StyleTr>
                  <StyleTh>${currProductInfo.price}</StyleTh>
                  <StyleTh2>Price</StyleTh2>
                  <StyleTh>${price}</StyleTh>
                </StyleTr>
                <StyleTr>
                  <StyleRatingTh><FiveStarRating score={currProductInfo.score} /></StyleRatingTh>
                  <StyleTh2>Rating</StyleTh2>
                  <StyleRatingTh><FiveStarRating score={score} /></StyleRatingTh>
                </StyleTr>
              </StyleBody>
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
const StyleBody = styled.tbody`

`

const StyleTr = styled.tr`

`
// const StyledFiveStar = styled(FiveStarRating)`

// `
const StyleRatingTh = styled.th`
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.color};
  padding: 0 1.1em 1.1em 1.1em;
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
  height: 100%;
  width: 50%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`
const ImagesContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 14em;
  overflow:hidden;
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