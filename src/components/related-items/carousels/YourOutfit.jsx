import React from "react";
import styled from "styled-components";
import Cards from '../Cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons';

const YourOutfit = () => (
  <Container>
    <TitleDiv>Your Outfit</TitleDiv>
    <InnerContainer>
      <Left icon={faChevronLeft}/>
      <CardContainer>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </CardContainer>
      <Right icon={faChevronRight}/>
    </InnerContainer>
    <SlideTracker>
      <Dash icon={faMinus} />
      <Dash2 icon={faMinus} />
      <Dash2 icon={faMinus} />
      <Dash2 icon={faMinus} />
    </SlideTracker>
  </Container>
)

const TitleDiv = styled.section`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: larger;
`
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  align-items: center;
`
const InnerContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  justify-content: center;
  align-items: center;
  width: 85%;
`
const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #313131;
  color: lightgray;
  padding: .5em;
  align-items: center;
  overflow: auto;
`
const SlideTracker = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const Left = styled(FontAwesomeIcon)`
  font-size: 2em;
  transition: all .2s;
  &:hover {
    transform: scale(1.5);
  }
`

const Right = styled(FontAwesomeIcon)`
  font-size: 2em;
  transition: all .2s;
  &:hover {
    transform: scale(1.5);
  }
`
const Dash = styled(FontAwesomeIcon)`
  font-size: 2.5em;
  margin: 0 .1em 0 .1em;
  color: #d3d3d3f2;
`
const Dash2 = styled(FontAwesomeIcon)`
  font-size: 2.5em;
  margin: 0 .1em 0 .1em;
  color: #d3d3d386;
`

export default YourOutfit;