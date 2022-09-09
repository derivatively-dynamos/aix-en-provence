import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import QuestionsComponent from "./Questions-Answers/q-a-container/QuestionsComponent";
import api from "../shared-components/api";

const QuestionsAndAnswers = ({ product }) => {
  const [questions, setQuestions] = useState([]);
  const [originalQuestions, setOriginalQuestions] = useState([]);
  const [update, setUpdate] = useState(false);

  let productID = product.id;
  let productName = product.name;

  useEffect(() => {
    if (productID !== undefined) {
      api
        .get(`qa/questions?product_id=${productID}&count=50`)
        .then(({ data }) => data.results)
        .then((results) => {
          setQuestions(results);
          setOriginalQuestions(results);
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
    }
  }, [productID, update]);

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
      if (questionText.indexOf(searchText) > -1) {
        return question;
      }
    });

    setQuestions(searchItems);
  };

  return (
    <Container>
      <div>
        <H2>QUESTIONS & ANSWERS</H2>
        <SearchBar handleSearch={handleSearch} />
        <QuestionsComponent
          questions={questions}
          productName={productName}
          productID={productID}
          setUpdate={setUpdate}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
  margin: 50px 0px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  position: relative;
  flex-direction: column;
`;

const H2 = styled.h2`
  margin-bottom: 0px;
  font-weight: lighter;
`;

export default QuestionsAndAnswers;
