import React from 'react';
import { useState, useEffect} from 'react';
import styled from 'styled-components';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import api from "../shared-components/api.js";

//sample data:
import sampleProduct from "./sampleReviews.js"
import sampleMetaData from "./sampleMetaData.js"

const RatingsAndReviews = ({productId, score, setScore }) => {
  const [ reviews, setReview] = useState(undefined);
  const [ metaData, setMetaData] = useState(undefined);

  useEffect(() => {
    api.get(`/reviews/?product_id=${productId}`)
    .then((product) => {
      const reviewBundle = product.data.results
      setReview(reviewBundle)
      //setScore for App
      const init = 0;
      const score = reviewBundle
        .map((review) => {
          return review.rating;
        })
        .reduce((total, curr) =>
          total + curr, init
        ) / reviewBundle.length;
        setScore(score)
    })
    .catch((err) => console.log(err))

    api.get(`/reviews/meta/?product_id=${productId}`)
    .then((returnedData) => {
      const apiMetaData = returnedData.data;
      setMetaData(apiMetaData);
    })
    .catch((err) => console.log(err))
  }, [productId])

  console.log(!reviews || !metaData)
  if (!reviews || !metaData) return <Loading />

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
const Loading = styled(Container)`
  height: 25em;
`
const AppContainer = styled(Container)`
  flex-direction: column;
  background-color: white;
  color: #303030;
`

export default RatingsAndReviews;