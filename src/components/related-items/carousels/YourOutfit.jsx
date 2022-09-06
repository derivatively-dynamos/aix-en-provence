import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import OutfitCards from './OutfitCards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';

const YourOutfit = ({ productId, setProductId, currProductInfo }) => {
  //State
  const [displayWidth, setDisplayWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [outfit, setOutfit] = useState(() => {
    if (localStorage.getItem('outfit')) {
      try {
        return JSON.parse(localStorage.getItem('outfit'))
      } catch (error) {
        localStorage.removeItem('outfiit')
      }
    }
    return [];
  });
  const [scrollLeftLoc, setScrollLeftLoc] = useState(0);
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(true);

  //Refs
  const scrollRef = useRef(null);

  //Utility functions
  const scroll = (direction) => {
    setScrollLeftLoc(scrollRef.current.scrollLeft += direction);
  };

  const updateOutfitHandler = () => {
    if (!outfit.includes(currProductInfo)) {
      setOutfit(oldOutfit => [...oldOutfit, currProductInfo])
    }
  }


  useEffect(() => {
    localStorage.setItem('outfit', JSON.stringify(outfit));
  }, [outfit])

  useEffect(() => {
    setDisplayWidth(scrollRef.current.offsetWidth);
    setScrollWidth(scrollRef.current.scrollWidth);
  }, [outfit]);

  //Conditional Rendering
  useEffect(() => {
    if (scrollLeftLoc > 32) {
      setIsShownLeft(true);
    }
    if (scrollLeftLoc < 100) {
      setIsShownLeft(false);
    }
    if (((scrollRef.current.scrollWidth - scrollRef.current.clientWidth) - scrollLeftLoc) < 0) {
      setIsShownRight(false);
    }
    if (((scrollRef.current.scrollWidth - scrollRef.current.clientWidth) - scrollLeftLoc) > 0) {
      setIsShownRight(true);
    }
  }, [scrollLeftLoc])


  let iconConditionalLeft;
  let iconConditionalRight;

  if (scrollWidth > displayWidth) {
    iconConditionalLeft = <IconCover onClick={() => {scroll(-200)}} style={{visibility: `${isShownLeft ? 'visible' : 'hidden'}`}}>
      <Left icon={faChevronLeft}/>
    </IconCover>
  } else {
    iconConditionalLeft = <IconCover style={{ display: 'none'}} />
  }
  if (scrollWidth > displayWidth) {
    iconConditionalRight = <IconCoverRight onClick={() => {scroll(200)}} style={{visibility: `${isShownRight ? 'visible' : 'hidden'}`}}>
      <Right icon={faChevronRight}/>
    </IconCoverRight>
  } else {
    iconConditionalRight = <IconCoverRight style={{ display: 'none'}} />
  }

  return (
    <Container>
      <TitleDiv>Your Outfit</TitleDiv>
      <InnerContainer>
        <AddItemCard onClick={() => {updateOutfitHandler()}}>
          <PlusIcon icon={faPlus}/>
          <AddItemText>Add to Outfit</AddItemText>
        </AddItemCard>
        <CardContainer ref={scrollRef}>
          {iconConditionalLeft}
          {[...outfit].reverse().map((product, i) => {
            if (product.id !== '') {
              return (
                <OutfitCards product={product} key={i} setProductId={setProductId} outfit={outfit} setOutfit={setOutfit} />
              )
            }
          })}
          {iconConditionalRight}
        </CardContainer>
      </InnerContainer>
      <SlideTracker />
    </Container>
  );
};
const AddItemCard = styled.section`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.shadow};
  max-width: 16em;
  min-width: 16em;
  height: 18.3em;
  align-items: center;
  justify-content: center;
  left: 0;
  margin: 0 .6em 0 0;
  scroll-snap-align: start;
  border: 2px solid ${props => props.theme.color};
  cursor: pointer;
`

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 6em;
  color: ${props => props.theme.color};
`
const AddItemText = styled.section`
  font-size: 1em;
  color: white;
`
const TitleDiv = styled.section`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: larger;
  color: ${props => props.theme.color}
`
const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => props.theme.background};
  color: lightgray;
  padding: 0.2;
  align-items: center;
`
const InnerContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: ${props => props.theme.background};
  color: lightgray;
  padding: 0.2;
  justify-content: start;
  align-items: center;
  width: 100%;
`
const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.background};
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
  width: 100%;
  height: 2em;
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
  color: ${props => props.theme.color};
`

const Right = styled(FontAwesomeIcon)`
  font-size: 2.3em;
  color: ${props => props.theme.color};
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


