import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import QuestionsComponent from "./Questions-Answers/q-a-container/QuestionsComponent";

import { GIT_AUTH, API_URL } from "../../../config";

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/qa/questions?product_id=37314`,
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

  console.log(questions);

  return (
    <Container>
      <div>
        <h1>QUESTIONS & ANSWERS...</h1>
        <SearchBar />
        <QuestionsComponent questions={questions} />
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
