import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyleSelector = ({ styles, style, setStyle }) => {
  const [grid, setGrid] = useState([]);
  const style_id = style.style_id;

  useEffect(() => {
    const newGrid = styles.map((style) => {
      let icon = <div />;
      if (style.style_id === style_id) {
        icon = (
          <CheckedIcon
            src={style.photos[0].thumbnail_url}
            key={style.style_id}
          ></CheckedIcon>
        );
      } else {
        icon = (
          <Icon
            src={style.photos[0].thumbnail_url}
            key={style.style_id}
            onClick={() => setStyle(style.style_id)}></Icon>
        );
      }
      return icon;
    });
    setGrid(newGrid);
  }, [styles, style]);

  return (
    <div>
      <Div>
        <strong>Style > </strong> {style.name}
      </Div>
      <IconGrid>{grid}</IconGrid>
    </div>
  );
};

const Div = styled.div`
  margin: 1em 0;
`;

const Icon = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px solid cyan;
`;

const CheckedIcon = styled(Icon)`
  border: 2px solid red;
`;

const IconGrid = styled.div`
  outline: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 250px; //Kinda hacky hardcoded solution to wrap the items
`;
export default StyleSelector;
