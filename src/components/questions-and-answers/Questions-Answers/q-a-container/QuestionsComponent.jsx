import React, { useState } from "react";
import styled from "styled-components";
import QuestionsField from "./QuestionsField";
import AddQuestionButton from "../Forms/Buttons/AddQuestionButton";

const QuestionsComponent = ({ questions, productName }) => {
  const [loadMore, setLoadMore] = useState(false);
  const handleClick = () => {
    setLoadMore((prevState) => !prevState);
  };

  return (
    <>
      <ContainerDiv>
        {questions.map((question, index) => {
          if (!loadMore && index < 2) {
            return (
              <QuestionsField
                key={question.question_id}
                question={question}
                productName={productName}
              />
            );
          } else if (loadMore) {
            return (
              <QuestionsField
                key={question.question_id}
                question={question}
                productName={productName}
              />
            );
          }
        })}
      </ContainerDiv>
      <QuestionDiv>
        {questions.length > 2 ? (
          <Button onClick={handleClick}>
            {loadMore ? "COLLAPSE" : "MORE ANSWERED QUESTIONS"}
          </Button>
        ) : null}
        <AddQuestionButton productName={productName} />
      </QuestionDiv>
    </>
  );
};

export default QuestionsComponent;

const ContainerDiv = styled.div`
  background-color: #7e7e7e;
  margin-top: 15px;
  display: block;
  align-items: center;
  justify-content: space-between;
  max-height: 300px;
  overflow: auto;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const QuestionDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  height: 100%;
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.color};
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
`;
