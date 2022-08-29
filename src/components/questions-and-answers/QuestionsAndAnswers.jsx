import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import QuestionComponent from "./Questions-Answers/q-a-container/QuestionComponent";
import QuestionForm from "./Questions-Answers/QuestionForm/QuestionForm";
// import API from "./env/config";

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   API.get("/questions?product_id=37312")
  //     .then(({ data }) => data.results)
  //     .then((results) => {
  //       setQuestions(results);
  //     })
  //     .catch((err) => {
  //       console.log("ERROR", err);
  //     });
  // }, []);
  // will include parent state passed as props referencing product ID

  // if array is greater than 1, display up to 5 questions

  return (
    <Container>
      <div>
        <h1>QUESTIONS & ANSWERS...</h1>
        <SearchBar />
        <QuestionComponent questions={questions} />
        <QuestionForm />
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
