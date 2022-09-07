import React, { Suspense, Component, useState, useEffect } from 'react';
import './app.scss';
import styled from 'styled-components';
import themes from './theme';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import clickTrack from './shared-components/ClickTracker';
import api from './shared-components/api';
const Overview = React.lazy(() => import('./overview/Overview'));
const RelatedItems = React.lazy(() => import('./related-items/RelatedItems'));
const QuestionsAndAnswers = React.lazy(() => import('./questions-and-answers/QuestionsAndAnswers'))
const RatingsAndReviews = React.lazy(() => import('./ratings-and-reviews/RatingsAndReviews'))

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
        <Suspense fallback={<Loading/>}>
          <Overview product={product} styles={styles} score={score} />
        </Suspense>
        <SlimColumn>
          <Suspense fallback={<Loading/>}>
            <RelatedItems
              productId={productId}
              setProductId={setProductId}
              product={product}
              styles={styles}
              score={score}
            />
          </Suspense>
          <Suspense fallback={<Loading/>}>
            <QuestionsAndAnswers product={product} />
          </Suspense>
          <Suspense fallback={<Loading/>}>
            <RatingsAndReviews setScore={setScore} productId={productId} />
          </Suspense>
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
const Loading = styled.div`
  width: 100%;
  height: 30em;
`

export default App;
