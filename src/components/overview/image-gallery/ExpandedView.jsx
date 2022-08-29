import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ExpandedImage from './ExpandedImage';

const ExpandedView = ({ photo, setPopover, index, setIndex, numPhotos }) => {
  const imageCont = useRef(null);
  const image = useRef(null);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [blownUp, setBlownUp] = useState(false);

  const handleMouseMove = (e) => { //Lots of math
    let rect = imageCont.current.getBoundingClientRect();
    let imageRect = image.current;
    let hiddenX = imageRect.width - rect.width;
    let hiddenY = imageRect.height - rect.height;
    let xPct = (e.clientX - rect.left) / rect.width;
    let yPct = (e.clientY - rect.top) / rect.height;
    let newXOffset = -(xPct * hiddenX);
    let newYOffset = -(yPct * hiddenY);
    setXOffset(newXOffset);
    setYOffset(newYOffset);
  };
  const expanded = (
    <ExpandedImage
      src={photo}
      setBlownUp={setBlownUp}
      index={index}
      setIndex={setIndex}
      numPhotos={numPhotos}
      setPopover={setPopover}
    />
  );
  const superExpanded = (
    <SuperExpandedImage
      src={photo}
      onClick={() => {
        setBlownUp(false);
        setPopover(false);
      }}
      style={{
        transform: `translate(${xOffset}px, ${yOffset}px)`,
        zIndex: blownUp ? '1' : '-1' }}
      ref={image}
    />
  );
  let display = blownUp ? null : expanded;

  return (
    <ImageContainer ref={imageCont}       onMouseMove={handleMouseMove}>
      {display}
      {superExpanded}
    </ImageContainer>
  )
};

const ImageContainer = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  position: absolute;
  overflow: hidden;
`;

const SuperExpandedImage = styled.img`
  width: 250%;
  cursor: zoom-out;
  position: relative;
`;

export default ExpandedView;
