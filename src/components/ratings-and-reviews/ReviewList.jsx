import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SortBy from './SortBy.jsx';
import Review from './Review.jsx';

const ReviewList = ({ products }) => {

  return (
    <Container>
      <div>
        <SortBy />
        {products[0].results.map((review) => {
          return <Review key={review.review_id} review={ review }/>
        })}
      </div>
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

export default ReviewList;