import React from "react";
import styled from "styled-components";


const Cards = () => (
  <Container>
    <ImageContainer>
      <img src="https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
    </ImageContainer>
    <InfoContainer>
      <div>Morning Joggers</div>
      <div>Pants</div>
      <div>$40.00</div>
      <div>★★★☆☆</div>
    </InfoContainer>
  </Container>
)




const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #925353;
  color: light;
  padding: 0 0 .5em 0;
  margin: 0 .4em 0 .4em;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  overflow: hidden;
  max-width: 16em;
  min-width: 16em;
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