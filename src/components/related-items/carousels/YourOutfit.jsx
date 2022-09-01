import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Cards from '../Cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons';

const YourOutfit = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    scrollRef.current.scrollLeft += direction;
  };
  return (
    <Container>
      <TitleDiv>Your Outfit</TitleDiv>
      <InnerContainer>
        <CardContainer ref={scrollRef}>
          <IconCover onClick={() => {scroll(-200)}}>
            <Left icon={faChevronLeft}/>
          </IconCover>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <IconCoverRight onClick={() => {scroll(200)}}>
            <Right icon={faChevronRight} />
          </IconCoverRight>
        </CardContainer>
      </InnerContainer>
      <SlideTracker>
        <Dash icon={faMinus} />
        <Dash2 icon={faMinus} />
        <Dash2 icon={faMinus} />
        <Dash2 icon={faMinus} />
      </SlideTracker>
    </Container>
  );
};
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
  padding: 0.2;
  align-items: center;
`
const InnerContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: #313131;
  color: lightgray;
  padding: 0.2;
  justify-content: center;
  align-items: center;
  width: 80%;
`
const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #313131;
  color: lightgray;
  padding: .2;
  align-items: stretch;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  overflow-x: hidden;
`
const SlideTracker = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const IconCover = styled.div`
  display: flex;
  width: 2em;
  align-items:stretch;
  left: 0px;
  flex-shrink: 0;
  position: sticky;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
  &:hover {
    backdrop-filter: blur(1px) brightness(120%);
  }
`
const IconCoverRight = styled(IconCover)`
  display: flex;
  right: 0px;
`

const Left = styled(FontAwesomeIcon)`
  font-size: 2.3em;
  color: white;
`

const Right = styled(FontAwesomeIcon)`
  font-size: 2.3em;
  color: white;
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