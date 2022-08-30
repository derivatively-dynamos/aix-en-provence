import React from "react";
import styled from "styled-components";

const Modal = ({ modalState, posTop, posLeft }) => {

  if (!modalState) {
    return null;
  } else {
    return (
      <Container left={posLeft} top={posTop} >
        <ImagesContainer>
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
          </ImageContainer>
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
          </ImageContainer>
        </ImagesContainer>
        <InfoContainer>
          <table border="5" cellpadding="5" bgcolor="#113b2f">
            <caption>Product Comparison</caption>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
            <tr>
              <th>Morning Joggers</th>
              <th>Pants</th>
              <th>$40.00</th>
              <th>★★★☆☆</th>
            </tr>
            <tr>
              <th>Camo Onesie</th>
              <th>Jackets</th>
              <th>$140.00</th>
              <th>★★★☆☆</th>
            </tr>
          </table>
        </InfoContainer>
      </Container>
    );
  }
};

const Container = styled.section`
  display: flex;
  border-radius: 2%;
  flex-direction: column;
  position: absolute;
  top: ${props => `${props.top}`};
  left: ${props => `${props.left}`};
  z-index: 2;
  overflow: hidden;
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
`
const InfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: row; */
  background-color: #1e4512e5;
  padding: 1em;
`



export default Modal;