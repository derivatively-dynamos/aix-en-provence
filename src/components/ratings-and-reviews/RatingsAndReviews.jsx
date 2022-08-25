import React from 'react';
import styled from 'styled-components';
import ReviewBreakdown from './ReviewBreakdown.jsx'
import ReviewList from './ReviewList.jsx'

const RatingsAndReviews = () => {

  return (
    <AppContainer>
      <h2>RATINGS AND REVIEWS</h2>
      <Container>
        <ReviewBreakdown />
        <ReviewList />
      </Container>
    </AppContainer>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
  background-color: gray;
`
const AppContainer = styled(Container)`
  flex-direction: column;
`

export default RatingsAndReviews;