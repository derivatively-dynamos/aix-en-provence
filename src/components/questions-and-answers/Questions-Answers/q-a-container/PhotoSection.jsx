import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Forms/Buttons/ModalForm";

const PhotoSection = ({ photos, answerID }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setPhoto] = useState(null);

  const onClick = (photo) => {
    if (photo) {
      setPhoto(photo);
    }
    setIsOpen((preState) => !preState);
  };

  if (photos.length > 0) {
    return (
      <Box1>
        {photos.map((photo, index) => {
          return (
            <Img
              key={answerID + index}
              onClick={() => onClick(photo)}
              src={photo}
            ></Img>
          );
        })}

        <Modal
          isOpen={isOpen}
          onClick={onClick}
          showCloseButton={false}
          showHeader={false}
          border={false}
        >
          <Img2 src={currentPhoto}></Img2>
        </Modal>
      </Box1>
    );
  }
};

export default PhotoSection;

const Box1 = styled.div`
  display: flex;
  width: 20%;
  margin-top: -10px;
`;

const Img = styled.img`
  width: 25%;
  margin 10%;
`;

const Img2 = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
