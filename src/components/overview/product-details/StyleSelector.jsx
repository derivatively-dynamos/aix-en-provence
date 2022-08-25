import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyleSelector = ({ styles: { results }, style }) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const newGrid = results.map((style) => {
      console.log(style);
      return (
        <Icon src={style.photos[0].thumbnail_url} key={style.style_id}></Icon>
      );
    });
    setGrid(newGrid);
  }, [results]);

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

const IconGrid = styled.div`
  outline: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 250px; //Kinda hacky hardcoded solution to wrap the items
`;
export default StyleSelector;
