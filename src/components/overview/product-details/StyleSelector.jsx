import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StyleSelector = ({ styles, style, setStyle, styleIndex }) => {
  const [grid, setGrid] = useState([]);
  const [selectedX, setSelectedX] = useState(0);
  const [selectedY, setSelectedY] = useState(0);
  const style_id = style.style_id;
  const gridRef = useRef(null);

  useEffect(() => {
    const newGrid = styles.map((style, index) => {
      return (
        <Icon
          src={style.photos[0].thumbnail_url}
          key={index}
          onClick={() => setStyle(index)}
          selected={index === styleIndex ? true : false}
        />
      );
    });
    setGrid(newGrid);
  }, [styles, styleIndex]);

  useEffect(() => {
    let child = gridRef.current.children[styleIndex];
    setSelectedX(child.offsetLeft);
    setSelectedY(child.offsetTop);
  }, [styleIndex]);

  return (
    <div>
      <Div>
        <strong>Style > </strong> {style.name}
      </Div>
      <IconGrid ref={gridRef}>
        {grid}
        <Selected style={{ left: selectedX, top: selectedY }}>
          <Check icon={faCheck} />
        </Selected>
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
  cursor: pointer;
  &:hover {
    filter: brightness(150%);
  }

`;

const IconGrid = styled.div`
  outline: none;
  color: ${props => props.theme.highlight};
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  max-width: 300px; //Kinda hacky hardcoded solution to wrap the items
  position: relative;
`;
const Selected = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
const Check = styled(FontAwesomeIcon)`
  color: ${props => props.theme.highlight};
  font-size: 2em;
  filter: drop-shadow(0px 0px 2px black);
`;
export default StyleSelector;
