import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
      <Up icon={faChevronUp} onClick={() => setIndex(index - 1)} />
      {icons}
      <Down icon={faChevronDown} onClick={() => setIndex(index + 1)} />
    </Ul>
  );
};
const Up = styled(FontAwesomeIcon)`
  font-size: 2em;
`;
const Down = styled(FontAwesomeIcon)`
  font-size: 2em;
`;
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
