import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../shared-components/api';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewList from './ReviewList.jsx';

const RatingsAndReviews = ({productId, score, setScore }) => {
  const [reviews, setReviews] = useState(undefined);
  const [sortedReviews, setSortedReviews] = useState(undefined);
  const [metaData, setMetaData] = useState(undefined);
  const [sortedBy, setSort ] = useState('relevance');
  const [isOpen, setIsOpen] = useState(false);

  const filterBy = (reviewArr, filter) => {
    switch (filter) {
      case 'helpfulness':
        const sortedByHelpfulness = reviewArr.slice().sort((a, b) =>
          b.helpfulness - a.helpfulness
        );
        setSortedReviews(sortedByHelpfulness);
        break;
      case 'newest':
        const sortedByNewest = reviewArr.slice().sort((a, b) => {
          let aDate = new Date(a.date)
          let bDate = new Date(b.date)
          return bDate - aDate;
        });
        setSortedReviews(sortedByNewest);
        break;
      case '5 Stars':
        sortByStars(5);
        break;
      case '4 Stars':
        sortByStars(4);
        break;
      case '3 Stars':
        sortByStars(3);
        break;
      case '2 Stars':
        sortByStars(2)
        break;
      case '1 Stars':
        sortByStars(1);
        break;
      default:
        setSortedReviews(reviewArr);
        break;
    }
  }

  const sortByStars = (starNum) => {
    const reviewsByNum = reviews.slice().filter(review => review.rating === starNum);
    setSortedReviews(reviewsByNum);
  }

  const report = (reviewId) => {
    console.log('reported');
    api.put(`/reviews/${reviewId}/report`)
    .then(() => {
      console.log('Post Reported!')
    })
    .catch((err) => {
      console.log(err)
    })
  }

<<<<<<< HEAD
  const markHelpful = (reviewId) => {
    console.log('Marked Helpful!');
    api.put(`/reviews/${reviewId}/helpful`)
=======
  const markHelpful = () => {
    api.put(`/reviews/${productId}/helpful`)
>>>>>>> 8709f18b4051038bab9db25e3cda267875d65e35
    .then(() => {
      console.log('marked helpful!')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    api.get(`/reviews?product_id=${productId}`)
    .then((product) => {
      const reviewBundle = product.data.results;
      setReviews(reviewBundle);
      filterBy(reviewBundle, sortedBy);
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

    api.get(`/reviews/meta?product_id=${productId}`)
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
<<<<<<< HEAD
      <h2>RATINGS AND REVIEWS</h2>
=======
      <Headline id="reviews">RATINGS AND REVIEWS</Headline>
>>>>>>> 8709f18b4051038bab9db25e3cda267875d65e35
      <Container>
        <ReviewBreakdown
          setSort={setSort}
          data={metaData}
        />
        <ReviewList
          report={report}
          markHelpful={markHelpful}
          reviews={sortedReviews}
          setSort={setSort}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
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
const Loading = styled(Container)`
  height: 25em;
`

export default RatingsAndReviews;