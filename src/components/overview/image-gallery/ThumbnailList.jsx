import React, { useRef } from 'react';
import styled from 'styled-components';

const ThumbnailList = ({ photos, setIndex, index, scrollPos }) => {
  const icons = photos.map((photo, i) => {
    return (
      <Icon
        src={photo.thumbnail_url}
        value={i}
        key={i}
        onClick={() => setIndex(i)}
        selected={index === i ? true : false}
      />
    );
  });

  return (
    //Empty div aligns scroll
    <Ul ref={scrollPos}>
      <div />
      {icons}
      <BotSpace />
    </Ul>
  );
};
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 88%;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  cursor: pointer;
`;
const Icon = styled.img`
  width: 53px;
  aspect-ratio: 1;
  background-color: white;
  object-fit: cover;
  margin: 0 4px;
  border: none;
  scroll-snap-align: start;
  scroll-margin-top: 4px;
  outline: ${(props) => (props.selected ? `2px solid` : 'none')};
  box-shadow: ${props => props.selected ? '0px 0px 4px black' : 'none'};
`;
const BotSpace = styled.div`
  width: 10px;
  flex: 1 0 1000px;
`;

export default ThumbnailList;
