import React from "react";
import styled from "styled-components";
import AnswerField from "./AnswerField";
import PhotoSection from "./PhotoSection";
import MoreAnswersButton from "./MoreAnswersButton";
import QuestionsField from "./QuestionsField";

const QuestionComponent = ({ questions }) => {
  if (questions.length <= 0) {
    return null;
  }

  const question = questions[0];
  const answers = question.answers;

  return (
    <ContainerDiv>
      <QuestionsField question={question} />
      <AnswerField answers={answers} />
      <MoreAnswersButton />
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
