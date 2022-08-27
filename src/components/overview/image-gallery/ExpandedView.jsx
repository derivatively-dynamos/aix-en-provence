import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ExpandedImage from './ExpandedImage';

const ExpandedView = ({ photo, setPopover, index, setIndex, numPhotos }) => {

  const imageCont = useRef(null);
  const image = useRef(null);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const handleMouseMove = (e) => {
    let rect = imageCont.current.getBoundingClientRect()
    let imageRect = image.current;
    let hiddenX = imageRect.width - rect.width;
    let hiddenY = imageRect.height - rect.height;
    let xPct = (e.clientX - rect.left) / rect.width;
    let yPct = (e.clientY - rect.top) / rect.height;
    let newXOffset = -(xPct * hiddenX);
    let newYOffset = -(yPct * hiddenY);

    setXOffset(newXOffset);
    setYOffset(newYOffset);
    // var setnewHeight = -(mouseoffTopPercent * excessHeight);
  }

  return (
    <ImageContainer ref={imageCont}  >
      <ExpandedImage
        src={photo}
        onClick={() => setPopover(false)}
        index={index}
        setIndex={setIndex}
        numPhotos={numPhotos}
      />
    </ImageContainer>
  );
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
  display: block;
`

export default ExpandedView;
