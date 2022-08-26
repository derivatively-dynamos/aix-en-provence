import React from "react";
import styled from "styled-components";

const PhotoSection = () => {
  return (
    <ContainerDiv>
      <div>
        <span>Yes, as you can see in these photos.</span>
        <Box1>
          <img src="https://static.thenounproject.com/png/1269202-200.png"></img>
          <img src="https://static.thenounproject.com/png/1269202-200.png"></img>
          <img src="https://static.thenounproject.com/png/1269202-200.png"></img>
        </Box1>
        <Box2>
          by User1234 <b>Seller</b> Jan 1, 2019 | Helpful? <Button>Yes</Button>{" "}
          (23) | <Button>Report</Button>
        </Box2>
      </div>
    </ContainerDiv>
  );
};

export default PhotoSection;

const ContainerDiv = styled.div`
  background-color: #7e7e7e;
  display: flex;
  margin-left: 10px;
`;

const Box1 = styled.div`
  display: flex;
  width: 20%;
`;

const Box2 = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
