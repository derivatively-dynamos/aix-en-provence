import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ThumbnailList from './ThumbnailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Description from './Description';

const DefaultView = ({
  photos,
  product,
  setIndex,
  index,
  setPopover,
  lastIndex,
}) => {
  const [photo, setPhoto] = useState(photos[0]);

  const scrollPos = useRef(null);

  useEffect(() => {
    if (photos[index]) setPhoto(photos[index]);
  }, [index, photos]);

  useEffect(() => {
    //Reset scroll position. Might need to fire on product change in the future
    scrollPos.current.scrollTop = 0;
  }, [product]);

  useEffect(() => {
    if (index % 7 === 0 && index !== 0 && index > lastIndex) {
      scrollDown();
    }
    if ((index + 1) % 7 === 0 && index < lastIndex) {
      scrollUp();
    }
  }, [index]);

  const scrollDown = () => {
    scrollPos.current.scrollTop += scrollPos.current.clientHeight;
  };
  const scrollUp = () => {
    scrollPos.current.scrollTop -= scrollPos.current.clientHeight;
  };
  const increaseIndex = () => {
    if (index < photos.length - 1) {
      setIndex(index + 1);
    }
  };
  const decreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <Container>
      <ImageContainer>
        {index !== 0 ? (
          <Left icon={faChevronLeft} onClick={decreaseIndex} />
        ) : null}
        {index !== photos.length - 1 ? (
          <Right icon={faChevronRight} onClick={increaseIndex} />
        ) : null}
        <MainImage src={photo.url} onClick={() => setPopover(true)}></MainImage>
        <ScrollContainer>
          <Up icon={faChevronUp} onClick={() => scrollUp(-1)} style={photos.length < 7 ? {visibility: 'hidden'} : {}}/>
          <ThumbnailList
            photos={[...photos]}
            setIndex={setIndex}
            index={index}
            scrollPos={scrollPos}
          />
          <Down icon={faChevronDown} onClick={() => scrollDown(1)} style={photos.length < 7 ? {visibility: 'hidden'} : {}} />
        </ScrollContainer>
      </ImageContainer>
      <Description slogan={product.slogan} description={product.description} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  user-select: none;
`;
const ScrollContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0.2em;
  padding: 0.2em 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
const MainImage = styled.img`
  border: none;
  flex: 1 1 0;
  height: 500px;
  @media (max-width: 768px){
    height: 300px;
  }
  width: 100%;
  object-fit: cover;
  cursor: zoom-in;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const Up = styled(FontAwesomeIcon)`
  font-size: 2em;
  filter: drop-shadow(0px 0px 2px black);
  cursor: pointer;
`;
const Down = styled(FontAwesomeIcon)`
  font-size: 2em;
  filter: drop-shadow(0px 0px 2px black);
  cursor: pointer;
`;
const Left = styled(FontAwesomeIcon)`
  font-size: 2em;
  position absolute;
  top: 50%;
  left: 3em;
  cursor: pointer;
  filter: drop-shadow(0px 0px 2px black);
`;
const Right = styled(FontAwesomeIcon)`
  font-size: 2em;
  position: absolute;
  top: 50%;
  right: 0.5em;
  cursor: pointer;
  filter: drop-shadow(0px 0px 2px black);
`;

export default DefaultView;
