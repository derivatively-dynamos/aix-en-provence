import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbnailList from './ThumbnailList';

const DefaultView = ({ photos, product }) => {
  const [photo, setPhoto] = useState(photos[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setPhoto(photos[0]);
    setIndex(0);
  }, [photos])

  const thumbnailHandler = (index) => {
    setIndex(index);
    setPhoto(photos[index]);
  };

  return (
    <Container>
      <MainImage src={photo.url} />
      <ThumbnailList
        photos={photos}
        setIndex={thumbnailHandler}
        index={index}
      />
      <P>
        <strong>{product.slogan}</strong>
      </P>
      <P>
        {product.description}
      </P>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;
const MainImage = styled.img`
  border: 2px solid cyan;
  flex: 1;
  max-height: 500px;
`;
const P = styled.p``;

export default DefaultView;
