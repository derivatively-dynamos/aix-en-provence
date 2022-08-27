import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ExpandedIcons = ({numPhotos, index, setIndex}) => {
  const icons = [];
  for (let i = 0; i < numPhotos; i++) {
    if(i===index) console.log(i);
    icons.push(
      <Icon
        key={i}
        onClick={() => setIndex(i)}>
        <Circle
          icon={faCircleDot}/>
      </Icon>)
  }
  const iconCont = useRef(null);
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    let selected = iconCont.current.children[index];
    setOffsetLeft(selected.offsetLeft);
  }, [index])

  return (
    <Div ref={iconCont}>
      {icons}
      <Indicator style={{left: offsetLeft}}>
        <RedCircle
          icon={faCircle}/>
      </Indicator>
    </Div>
  )
}

const Div = styled.div`
  position: absolute;
  display: flex;
  gap: .25em;
  top: .5em;
  left: .5em;
  height: fit-content;
`
const Circle = styled(FontAwesomeIcon)`
  font-size: 1em;
  z-index: 2;
  color: white;
  position: relative;
`
const Indicator = styled.div`
  width: 1em;
  height: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  transition: left 200ms ease-in-out;
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const RedCircle = styled(Circle)`
  font-size: .6em;
  color: #c01010;
`

export default ExpandedIcons;