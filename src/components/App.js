import React, { Component } from 'react';
import './app.scss';
import styled from 'styled-components';
import Overview from './overview/Overview';
import RelatedItems from './related-items/RelatedItems';
import QuestionsAndAnswers from './questions-and-answers/QuestionsAndAnswers';
import RatingsAndReviews from './ratings-and-reviews/RatingsAndReviews';

const App = () => {
  return (
    <Div className="container">
      <h1>Hello World!</h1>
      <Overview />
      <RelatedItems />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto 0 auto;
  width: 80%;
`

export default App;
