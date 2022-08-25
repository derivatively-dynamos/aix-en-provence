import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import QuestionComponent from "./Questions-Answers/QuestionField";

const QuestionsAndAnswers = () => {
  return (
    <Container>
      <div>
        <h1>QUESTIONS & ANSWERS...</h1>
        <SearchBar />
        <QuestionComponent />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  width: 100%;
  padding: 0.5em;
  background-color: #7e7e7e;
`;

export default QuestionsAndAnswers;
