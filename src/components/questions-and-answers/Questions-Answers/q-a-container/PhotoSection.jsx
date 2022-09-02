import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Forms/Buttons/ModalForm";

const PhotoSection = ({ photos, answerID }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((preState) => !preState);
  };

  if (photos.length > 0) {
    return (
      <Box1>
        {photos.map((photo) => {
          if (!isOpen) {
            return <Img onClick={onClick} key={answerID} src={photo}></Img>;
          } else {
            return (
              <Modal
                isOpen={isOpen}
                onClick={onClick}
                showCloseButton={false}
                showHeader={false}
              >
                <Img2 key={answerID} src={photo}></Img2>
              </Modal>
            );
          }
        })}
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
