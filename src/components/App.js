import React, { Component, useState } from 'react';
import './app.scss';
import styled from 'styled-components';
import Overview from './overview/Overview';
import RelatedItems from './related-items/RelatedItems';
import QuestionsAndAnswers from './questions-and-answers/QuestionsAndAnswers';
import RatingsAndReviews from './ratings-and-reviews/RatingsAndReviews';
import themes from './theme';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import clickTrack from './shared-components/ClickTracker';

const OverviewTrack = clickTrack(Overview, 'overview');

const App = () => {
  const [theme, setTheme] = useState('dark');


  return (
    <Container className="container">
      <ThemeProvider theme={themes[theme]}>
        <Header curTheme={theme} setTheme={setTheme} themes={themes} />
        <OverviewTrack productId={37311} />
        <RelatedItems />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </ThemeProvider>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto 0 auto;
  max-width: 1200px;
  gap: 1em;
  border: 1px solid darkgray;
  background-color: #dbdbdb;
`;

export default App;
