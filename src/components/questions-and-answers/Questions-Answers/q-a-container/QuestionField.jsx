import React from "react";
import styled from "styled-components";
import AnswerField from "./AnswerField";
import PhotoSection from "./PhotoSection";
import LoadAnswers from "./LoadAnswers";

const QuestionComponent = () => {
  return (
    <ContainerDiv>
      <Box1>
        <h3>Q: Who what which when where why whether how?</h3>
        <Box2>
          Helpful? <Button>Yes</Button> (23) | <Button>Add Answer</Button>
        </Box2>
      </Box1>
      <AnswerField />
      <PhotoSection />
      <LoadAnswers />
    </ContainerDiv>
  );
};

export default QuestionComponent;

const ContainerDiv = styled.div`
  background-color: #7e7e7e;
  display: block;
  align-items: center;
  justify-content: space-between;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box2 = styled.span`
  margin-top: 20px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
