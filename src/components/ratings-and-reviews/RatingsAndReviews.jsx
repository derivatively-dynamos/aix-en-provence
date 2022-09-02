import React from 'react';
import { useState, useEffect} from 'react';
import styled from 'styled-components';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import api from "../shared-components/api.js";

const RatingsAndReviews = ({productId, score, setScore }) => {
  const [ reviews, setReviews] = useState(undefined);
  const [ metaData, setMetaData] = useState(undefined);
  const [ sortedBy, setSort ] = useState('relevance')

  const filterBy = (reviewArr, filter) => {
    if (filter === 'helpfulness') {
      const sortedByHelpfulness = reviewArr.slice().sort((a, b) =>
        b.helpfulness - a.helpfulness
      );
      setReviews(sortedByHelpfulness);
    } else if (filter === 'newest') {
      const sortedByNewest = reviewArr.slice().sort((a, b) => {
        let aDate = new Date(a.date)
        let bDate = new Date(b.date)
        return bDate - aDate;
      });
      setReviews(sortedByNewest);
    } else {
      setReviews(reviewArr);
    }
  }

  const report = () => {
    console.log('reported')
  }

  const markHelpful = () => {
    console.log('marked helpful!')
  }

  useEffect(() => {
    api.get(`/reviews/?product_id=${productId}`)
    .then((product) => {
      const reviewBundle = product.data.results
      filterBy(reviewBundle, sortedBy)
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

  useEffect(() => {
    filterBy(reviews, sortedBy)
  }, [sortedBy])

  if (!reviews || !metaData) return <Loading />

  return (
    <AppContainer>
      <Headline>RATINGS AND REVIEWS</Headline>
      <Container>
        <ReviewBreakdown data={metaData}/>
        <ReviewList report={report} markHelpful={markHelpful} reviews={reviews} setSort={setSort}/>
      </Container>
    </AppContainer>
  )
}

const Headline = styled.h2`
  padding-bottom: 1em;
`

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