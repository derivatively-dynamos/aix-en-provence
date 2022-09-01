import React from "react";
import styled from "styled-components";

const PhotoSection = ({ photos, answerID }) => {
  if (photos.length > 0) {
    return (
      <Box1>
        {photos.map((photo) => {
          return <Img key={answerID} src={photo}></Img>;
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

const Box2 = styled.div`
  margin-top: -10px;
`;

const Img = styled.img`
  width: 25%;
  margin 10%;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
