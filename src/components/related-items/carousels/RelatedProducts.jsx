import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Cards from './Cards.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons';
import api from '../../shared-components/api';

const RelatedProducts = ({ productId, setProductId, currProductInfo }) => {
  //State
  const [relatedProducts, setRelatedProducts] = useState([37312, 37313, 37318, 37317]);
  const [displayWidth, setDisplayWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  //Refs
  const scrollRef = useRef(null);

  //Utility functions
  const scroll = (direction) => {
    scrollRef.current.scrollLeft += direction;
    console.log(scrollRef);
  };

  useEffect(() => {
    api.get(`products/${productId}/related`)
    .then(res => {
      setRelatedProducts(res.data);
    })
    .catch(err => console.error(err))
  }, [productId]);

  //Use Effect
  useEffect(() => {
    setDisplayWidth(scrollRef.current.offsetWidth);
    setScrollWidth(scrollRef.current.scrollWidth);
  }, [productId]);

  //Conditional Rendering
  let iconConditionalLeft;
  let iconConditionalRight;

  if (scrollWidth > displayWidth) {
    iconConditionalLeft = <IconCover onClick={() => {scroll(-200)}}>
      <Left icon={faChevronLeft}/>
    </IconCover>
  } else {
    iconConditionalLeft = <IconCover style={{ display: 'none'}} />
  }
  if (scrollWidth > displayWidth) {
    iconConditionalRight = <IconCoverRight onClick={() => {scroll(200)}}>
      <Right icon={faChevronRight}/>
    </IconCoverRight>
  } else {
    iconConditionalRight = <IconCoverRight style={{ display: 'none'}} />
  }

  return (
    <Container>
      <TitleDiv>Related Products</TitleDiv>
      <InnerContainer>
        <CardContainer ref={scrollRef}>
          {iconConditionalLeft}
          {relatedProducts.map((product, i) => {
            return (
              <Cards product={product} key={i} setProductId={setProductId} currProductInfo={currProductInfo} />
            )
          })}
          {iconConditionalRight}
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
  width: 80%;
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

