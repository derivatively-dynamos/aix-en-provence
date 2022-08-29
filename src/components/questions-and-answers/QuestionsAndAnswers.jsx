import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import QuestionForm from "./Questions-Answers/QuestionForms/QuestionForm";
import QuestionComponent from "./Questions-Answers/q-a-container/QuestionComponent/QuestionComponent";

import { GIT_AUTH, API_URL } from "../../../config";

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/qa/questions?product_id=37312`,
      headers: { Authorization: GIT_AUTH },
      responseType: "json",
    })
      .then(({ data }) => data.results)
      .then((results) => {
        setQuestions(results);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);

  // .get(`${API_URL}/qa/questions?product_id=37312`, {
  //   Authorization: GIT_AUTH,
  // })

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
