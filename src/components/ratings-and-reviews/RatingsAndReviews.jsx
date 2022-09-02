import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ReviewBreakdown from './ReviewBreakdown.jsx'
import ReviewList from './ReviewList.jsx'

//sample data:
import sampleProduct from "./sampleReviews.js"
import sampleMetaData from "./sampleMetaData.js"

const RatingsAndReviews = ({ score, setScore }) => {

  const [ reviews ] = useState(sampleProduct[0].results);
  const [ metaData ] = useState(sampleMetaData);

  return (
    <AppContainer>
      <h2>RATINGS AND REVIEWS</h2>
      <Container>
        <ReviewBreakdown data={metaData}/>
        <ReviewList reviews={reviews}/>
      </Container>
    </AppContainer>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
`
const AppContainer = styled(Container)`
  flex-direction: column;
  background-color: white;
  color: #303030;
`

export default RatingsAndReviews;