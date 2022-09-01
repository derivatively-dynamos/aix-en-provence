import React, { useState } from "react";
import styled from "styled-components";
import AnswersComponent from "./AnswersComponent";
import HelpfulnessAnswerComponent from "./HelpfulnessAnswerComponent";

const QuestionsField = ({ question, productName }) => {
  const {
    question_body,
    answers: questionsAnswers,
    question_helpfulness: helpfulness,
  } = question;

  const answers = Object.values(questionsAnswers);

  return (
    <>
      <div>
        <Box1>
          <div>
            <b>Q:</b> {question_body}
          </div>
          <HelpfulnessAnswerComponent
            helpfulness={helpfulness}
            productName={productName}
            question={question_body}
          />
        </Box1>
        <AnswersComponent answers={answers} />
      </div>
    </>
  );
};

export default QuestionsField;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: left;
`;
