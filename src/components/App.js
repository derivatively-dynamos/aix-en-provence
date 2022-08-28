import React, { Component } from 'react';
import './app.scss';
import styled from 'styled-components';
import Overview from './overview/Overview';
import RelatedItems from './related-items/RelatedItems';
import QuestionsAndAnswers from './questions-and-answers/QuestionsAndAnswers';
import RatingsAndReviews from './ratings-and-reviews/RatingsAndReviews';

const App = () => {
  return (
    <Container className="container">
      <h1>Hello World!</h1>
      <Overview />
      <RelatedItems />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto 0 auto;
  max-width: 1000px;
  gap: 1em;
  border: 1px solid darkgray;
  background-color: #dbdbdb;
`

export default App;
