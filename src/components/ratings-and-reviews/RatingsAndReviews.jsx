import React from 'react';
import styled from 'styled-components';

const RatingsAndReviews = () => {

  return (
    <div>
      <h2>RATINGS AND REVIEWS</h2>
      <Container>
        <BdContainer></BdContainer>
        <RlContainer></RlContainer>
      </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
  background-color: gray;
`
const BdContainer = styled(Container)`
  background-color: red;
`
const RlContainer = styled(Container)`
  background-color: purple;
`

export default RatingsAndReviews;