import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StyleSelector = ({ styles, style, setStyle }) => {
  const [grid, setGrid] = useState([]);
  const style_id = style.style_id;
  const gridRef = useRef(null);

  useEffect(() => {
    const newGrid = styles.map((style, index) => {
      return (
        <Icon
          src={style.photos[0].thumbnail_url}
          key={index}
          onClick={() => setStyle(index)}
        />
      );
    });
    setGrid(newGrid);
  }, [styles]);

  useEffect(() => {
    console.log(gridRef.current);
  }, [style])



  return (
    <div>
      <Div>
        <strong>Style > </strong> {style.name}
      </Div>
      <IconGrid ref={gridRef}>
        {grid}
        <Check icon={faCheck} />
      </IconGrid>
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
  border: none;
  object-fit: cover;
`;

const IconGrid = styled.div`
  outline: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  max-width: 250px; //Kinda hacky hardcoded solution to wrap the items
  position: relative;
`;

const Check = styled(FontAwesomeIcon)`
  font-size: 2em;
  color: red;
  position: absolute;
`;
export default StyleSelector;
