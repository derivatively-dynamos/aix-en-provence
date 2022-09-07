import React, { Component, useState, useEffect } from 'react';
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
import api from './shared-components/api';

const OverviewTrack = clickTrack(Overview, 'overview');

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [productId, setProductId] = useState(37313);
  const [product, setProduct] = useState('');
  const [styles, setStyles] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    api
      .get(`products/${productId}`)
      .then((res) => {
        console.log('PRODUCT DATA: ', res.data)
        setProduct(res.data);
        return api.get(`products/${productId}/styles`);
      })
      .then((res) => {
        setStyles(res.data.results);
      })
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <Container
        className="container"
        style={{ backgroundColor: themes[theme].background }}
      >
        <Header curTheme={theme} setTheme={setTheme} themes={themes} />
        <Overview product={product} styles={styles} score={score} />
        <SlimColumn>
          <RelatedItems
            productId={productId}
            setProductId={setProductId}
            product={product}
            styles={styles}
            score={score}
          />
          <QuestionsAndAnswers product={product} />
          <RatingsAndReviews setScore={setScore} productId={productId} />
        </SlimColumn>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 1em auto;
  max-width: 1200px;
  background-color: ${props => props.theme.background};
`;
const SlimColumn = styled.div`
  max-width: 85%;
`;

export default App;
