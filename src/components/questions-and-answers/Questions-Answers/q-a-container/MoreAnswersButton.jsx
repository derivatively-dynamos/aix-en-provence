import React from "react";
import styled from "styled-components";

const MoreAnswersButton = () => {
  return (
    <ContainerDiv>
      <button>LOAD MORE ANSWERS</button>
    </ContainerDiv>
  );
};

export default MoreAnswersButton;

const ContainerDiv = styled.div`
  background-color: #7e7e7e;
  display: flex;
  margin-left: 5px;
  margin-top: 20px;
`;
