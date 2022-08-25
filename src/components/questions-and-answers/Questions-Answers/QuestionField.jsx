import React from "react";
import styled from "styled-components";
import AnswerField from "./AnswerField";

const QuestionComponent = () => {
  return (
    <Container>
      <Box1>
        <h3>Q: Who what which when where why whether how?</h3>
        <Box2>
          Helpful? <u>Yes</u> | <u>Add Answer</u>
        </Box2>
      </Box1>
      <AnswerField />
    </Container>
  );
};

export default QuestionComponent;

const Container = styled.div`
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
