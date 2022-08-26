import React from "react";
import styled from "styled-components";

const PhotoSection = ({ photos }) => {
  if (photos.length > 0) {
    return (
      <ContainerDiv>
        <div>Yes, as you can see in these photos.</div>
        <Box1>
          {photos.map((photo, index) => {
            return <Img src={`${photo}`}></Img>;
          })}
        </Box1>
        <Box2>
          by User1234 <b>Seller</b> Jan 1, 2019 | Helpful? <Button>Yes</Button>
          (23) | <Button>Report</Button>
        </Box2>
      </ContainerDiv>
    );
  }
};

export default PhotoSection;

const ContainerDiv = styled.div`
  background-color: #7e7e7e;
  display: flex;
  margin-left: 10px;
  padding-top: 30px;
  flex-direction: column;
`;

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
