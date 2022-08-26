import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SortBy from './SortBy.jsx';
import Review from './Review.jsx';

const ReviewList = ({ product }) => {

  return (
    <Container>
      <div>
        <SortBy />
        {product.results.map((review) => {
          return <Review key={review.review_id} review={ review }/>
        })}
      </div>
      <button>View More</button>
      <button>Add Review</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 2;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
`

const Btn = styled.button`
`

export default ReviewList;