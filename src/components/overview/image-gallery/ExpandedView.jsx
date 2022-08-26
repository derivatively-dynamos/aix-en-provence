import React, { useState } from 'react';
import styled from 'styled-components';

const ExpandedView = ({ photo, setPopover }) => {

  const [xOff, setXOff] = useState(0);
  let xOffset = 0;
  let yOffset = 0;
  let parentRect = null;
  const logPos = (e) => {
    let rect = e.target.getBoundingClientRect();
    parentRect = e.target.parentElement.getBoundingClientRect();
    let x = e.clientX - rect.left;
    xOffset = x / parentRect.width * rect.width;
    let y = e.clientY - rect.top;
    yOffset = y / parentRect.height * rect.height;
    setXOff(xOffset);
    console.log(xOffset);
  }
  return (
    <ImageContainer onMouseMove={logPos}>
      <ExpandedImage src={photo} onClick={() => setPopover(false)} xOffset={`-${xOff}px`}/>
    </ImageContainer>
  ) ;
};

const ExpandedImage = styled.img.attrs(props => ({
  left: props.xOffset;
}))`
  width: 200%;
  position: relative;
  top:-0%;
`;
const ImageContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  position: absolute;
  overflow: hidden;
`

export default ExpandedView;
