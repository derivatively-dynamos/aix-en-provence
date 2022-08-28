import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import ExpandedIcons from './ExpandedIcons';

const ExpandedImage = ({ index, setIndex, numPhotos, setPopover, ...props }) => {
  return (
    <Container>
      {index === 0 ? null : (
        <Left icon={faChevronLeft} onClick={() => setIndex(index - 1)} />
      )}
      <StyledImage {...props} />
      {index === numPhotos - 1 ? null : (
        <Right icon={faChevronRight} onClick={() => setIndex(index + 1)} />
      )}
      <Close icon={faXmark} onClick={() => setPopover(false)}/>
      <ExpandedIcons numPhotos={numPhotos} index={index} setIndex={setIndex}/>
    </Container>
  );
};

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: crosshair;
`;
const IconBase = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2em;
  position: absolute;
  cursor: pointer;
  filter: drop-shadow(0px 0px 2px black);
`
const Left = styled(IconBase)`
  top: 50%;
  left: 0.5em;
`;
const Right = styled(IconBase)`
  top: 50%;
  right: 0.5em;
`;
const Close = styled(IconBase)`
  top: 0.25em;
  right: 0.25em;
`
const Container = styled.div`
  height: 100%;
  position: relative;
  z-index: 0;
`

export default ExpandedImage;
