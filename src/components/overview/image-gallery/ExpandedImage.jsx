import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const ExpandedImage = ({ index, setIndex, numPhotos, ...props }) => {
  return (
    <Container>
      {index === 0 ? null : (
        <Left icon={faChevronLeft} onClick={() => setIndex(index - 1)} />
      )}
      <StyledImage {...props} />
      {index === numPhotos - 1 ? null : (
        <Right icon={faChevronRight} onClick={() => setIndex(index + 1)} />
      )}
    </Container>
  );
};

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Left = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2em;
  position absolute;
  top: 50%;
  left: 0.5em;
  cursor: pointer;
  filter: drop-shadow(0px 0px 2px black);
`;
const Right = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2em;
  position: absolute;
  top: 50%;
  right: 0.5em;
  cursor: pointer;
  filter: drop-shadow(0px 0px 2px black);
`;
const Container = styled.div`
  height: 100%;
`

export default ExpandedImage;
