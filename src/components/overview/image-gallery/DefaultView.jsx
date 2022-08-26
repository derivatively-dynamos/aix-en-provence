import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbnailList from './ThumbnailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DefaultView = ({ photos, product, setIndex, index, setPopover }) => {
  const [photo, setPhoto] = useState(photos[0]);

  useEffect(() => {
    setPhoto(photos[index]);
  }, [index])


  return (
    <Container>
      <ImageContainer>
        <MainImage src={photo.url} onClick={() => setPopover(true)}></MainImage>
        <Up icon={faChevronUp} />
        <ThumbnailList
          photos={photos}
          setIndex={setIndex}
          index={index}
        />
        <Down icon={faChevronDown} />
      </ImageContainer>
      <P>
        <strong>{product.slogan}</strong>
      </P>
      <P>{product.description + product.description}</P>
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
const MainImage = styled.img`
  border: 2px solid cyan;
  flex: 1 1 0;
  max-height: 500px;
  width: 100%;
  object-fit: cover;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const P = styled.p`

`;
const Up = styled(FontAwesomeIcon)`
  font-size: 2em;
  position: absolute;
  top: 0;
  left: 1em;
`;
const Down = styled(FontAwesomeIcon)`
  font-size: 2em;
  position: absolute;
  left: 1em;
  bottom: 0;
`;

export default DefaultView;
