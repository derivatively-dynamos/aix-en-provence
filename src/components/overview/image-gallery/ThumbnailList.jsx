import React from 'react';
import styled from 'styled-components';

const ThumbnailList = ({ photos, setIndex, index }) => {
  const icons = photos.map((photo, i) => {
    if (i === index) {
      return (
        <CheckedIcon
          src={photo.thumbnail_url}
          value={i}
          key={i}
          onClick={() => setIndex(i)}
        />
      );
    }
    return (
      <Icon
        src={photo.thumbnail_url}
        value={i}
        key={i}
        onClick={() => setIndex(i)}
      />
    );
  });

  return (
    <Ul>
      {icons}
    </Ul>
  );
};

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 25px;
  left: 15px;
  height: 88%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Icon = styled.img`
  height: 60px;
  width: 60px;
  aspect-ratio: 1;
  object-fit: cover;
  border: 1px solid red;
  background: gray;
  margin-right: 4px;
  margin-top: 5px;
`;
const CheckedIcon = styled(Icon)`
  border: 2px solid cyan;
`;

export default ThumbnailList;
