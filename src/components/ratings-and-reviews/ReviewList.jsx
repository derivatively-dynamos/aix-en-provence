import React from 'react';
import styled from 'styled-components';

const ReviewList = () => {
  return (
    <Container>248 reviews, sorted by relevance</Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
  padding: 0.5em;
  background-color: white;
`

export default ReviewList;