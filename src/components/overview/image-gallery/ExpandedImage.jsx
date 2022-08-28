import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ExpandedIcons from "./ExpandedIcons";

const ExpandedImage = ({
  index,
  setIndex,
  numPhotos,
  setPopover,
  ...props
}) => {
  let leftChange = null;
  let rightChange = null;
  if (index !== 0) { //Hide if first image
    leftChange = (
      <IconCover onClick={() => setIndex(index - 1)}>
        <Left icon={faChevronLeft} />
      </IconCover>
    );
  }
  if (index !== numPhotos - 1) { //Hide if last image
    rightChange = (
      <IconCoverRight onClick={() => setIndex(index + 1)}>
        <Right icon={faChevronRight} />
      </IconCoverRight>
    );
  }

  return (
    <Container>
      <ImageCover>
        {leftChange}
        {rightChange}
      </ImageCover>

      <StyledImage {...props} />
      <Close icon={faXmark} onClick={() => setPopover(false)} />
      <ExpandedIcons numPhotos={numPhotos} index={index} setIndex={setIndex} />
    </Container>
  );
};

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: crosshair;
`;
const ImageCover = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const IconCover = styled.div`
  display: flex;
  align-items: center;
  width: 3em;
  height: 100%;
  float: left;
  cursor: pointer;
  &:hover {
    backdrop-filter: blur(2px) brightness(120%);
  }
`;
const IconCoverRight = styled(IconCover)`
  float: right;
`;
const IconBase = styled(FontAwesomeIcon)`
  color: white;
  font-size: 2em;
  position: absolute;
  cursor: pointer;
  filter: drop-shadow(0px 0px 2px black);
`;
const Left = styled(IconBase)`
  top: 50%;
  left: 0.5em;
`;
const Right = styled(IconBase)`
  top: 50%;
  right: 0.5em;
`;
const Close = styled(IconBase)`
  top: 0.25em;
  right: 0.25em;
`;
const Container = styled.div`
  height: 100%;
  position: relative;
  z-index: 0;
`;

export default ExpandedImage;
