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

  return <Ul>{icons}</Ul>;
};
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: 10px;
`;
const Icon = styled.img`
  height: 60px;
  width: 60px;
  border: 1px solid red;
  background: gray;
  margin-right: 4px;
  margin-top: 5px;
`;

const CheckedIcon = styled(Icon)`
  border: 2px solid cyan;
`;

export default ThumbnailList;
