import React, { useState } from "react";
import styled from "styled-components";
import QuestionsField from "./QuestionsField";
import AddQuestionButton from "../Forms/Buttons/AddQuestionButton";

const QuestionsComponent = ({ questions }) => {
  const [loadMore, setLoadMore] = useState(false);

  const handleClick = () => {
    setLoadMore((prevState) => !prevState);
  };
  return (
    <ContainerDiv>
      {questions.map((question, index) => {
        if (!loadMore && index < 2) {
          return (
            <QuestionsField key={question.question_id} question={question} />
          );
        } else if (loadMore) {
          return (
            <QuestionsField key={question.question_id} question={question} />
          );
        }
      })}
      <button onClick={handleClick}>
        {loadMore ? "COLLAPSE" : "MORE ANSWERED QUESTIONS"}
      </button>
      <AddQuestionButton>ADD A QUESTION</AddQuestionButton>
    </ContainerDiv>
  );
};

export default QuestionsComponent;

const ContainerDiv = styled.div`
  background-color: #7e7e7e;
  display: block;
  align-items: center;
  justify-content: space-between;
`;
