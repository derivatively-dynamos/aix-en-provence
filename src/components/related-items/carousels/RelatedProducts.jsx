import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Cards from './Cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons';
import api from '../../shared-components/api';

const RelatedProducts = ({ productId, setProductId, currProductInfo }) => {
  //State
  const [relatedProducts, setRelatedProducts] = useState([37312, 37313, 37318, 37317]);
  const [scrollLeftLoc, setScrollLeftLoc] = useState(0);
  const [isShownLeft, setIsShownLeft] = useState(false);
  const [isShownRight, setIsShownRight] = useState(true);

  //Refs
  const scrollRef = useRef(null);

  //Utility functions
  const scroll = (direction) => {
    setScrollLeftLoc(scrollRef.current.scrollLeft += direction);
  };

  //Use Effect
  useEffect(() => {
    api.get(`products/${productId}/related`)
    .then(res => {
      setRelatedProducts(res.data);
    })
    .catch(err => console.error(err))
  }, [productId]);


  useEffect(() => {
    if (scrollLeftLoc > 32) {
      setIsShownLeft(true);
    }
    if (scrollLeftLoc < 200) {
      setIsShownLeft(false);
    }
    if (((scrollRef.current.scrollWidth - scrollRef.current.clientWidth) - scrollLeftLoc) < 0) {
      setIsShownRight(false);
    }
    if (((scrollRef.current.scrollWidth - scrollRef.current.clientWidth) - scrollLeftLoc) > 0) {
      setIsShownRight(true);
    }
  }, [scrollLeftLoc])


  return (
    <Container>
      <TitleDiv>Related Products</TitleDiv>
      <InnerContainer>
        <CardContainer ref={scrollRef}>
          <IconCover onClick={() => { scroll(-265) }} style={{visibility: `${isShownLeft ? 'visible' : 'hidden'}`}}>
            <Left icon={faChevronLeft} />
          </IconCover>
          {relatedProducts.map((product, i) => {
            return (
              <Cards product={product} key={i} setProductId={setProductId} currProductInfo={currProductInfo} />
            )
          })}
          <IconCoverRight onClick={() => { scroll(265) }} style={{visibility: `${isShownRight ? 'visible' : 'hidden'}`}}>
            <Right icon={faChevronRight} />
          </IconCoverRight>
        </CardContainer>
      </InnerContainer>
      <SlideTracker />
    </Container>
  );
};
{/* <Dash2 icon={faMinus} /> */}
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
  justify-content: center;
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
  height: 1em;
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


export default RelatedProducts;

