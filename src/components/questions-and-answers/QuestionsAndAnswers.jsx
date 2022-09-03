import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import QuestionsComponent from "./Questions-Answers/q-a-container/QuestionsComponent";
import { GIT_AUTH, API_URL } from "../../../config";

const QuestionsAndAnswers = ({ product }) => {
  const [questions, setQuestions] = useState([]);
  const [originalQuestions, setOriginalQuestions] = useState([]);

  let productID = product.id;

  useEffect(() => {
    if (productID !== undefined) {
      axios({
        method: "get",
        url: `${API_URL}/qa/questions?product_id=${productID}&count=50`,
        headers: { Authorization: GIT_AUTH },
        responseType: "json",
      })
        .then(({ data }) => data.results)
        .then((results) => {
          setQuestions(results);
          setOriginalQuestions(results);
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
    }
  }, [productID]);

  const handleSearch = (searchText) => {
    searchText = searchText.toLocaleLowerCase();
    if (searchText === "") {
      setQuestions(() => originalQuestions);
    }
    if (searchText.length < 3) {
      return;
    }
    const searchItems = questions.filter((question) => {
      const questionText = JSON.stringify(question).toLocaleLowerCase();
      if (questionText.includes(searchText)) {
        return question;
      }
    });
    setQuestions(searchItems);
  };

  const productName = `Slacker's Slacks`;
  // will need to get product name passed down as props
  return (
    <Container>
      <div>
        <h1>QUESTIONS & ANSWERS...</h1>
        <SearchBar handleSearch={handleSearch} />
        <QuestionsComponent questions={questions} productName={product.name} />
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

const Box1 = styled.div`
  max-height: 500px;
  overflow: auto;
`;

export default QuestionsAndAnswers;
