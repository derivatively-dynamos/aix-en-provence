import React from 'react';
import styled from 'styled-components';

const Review = ({ review }) => {
  let stars = '';
  while (stars.length < review.rating) {
    stars += '⭐'
  }

  let date = new Date(review.date).toLocaleDateString("en-us", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });


  return (
    <ReviewCont>
      <ReviewHead>
        <div>{stars}</div>
        <AuthorDate>
          <div>{review.reviewer_name},</div>
          <div>{date}</div>
        </AuthorDate>
      </ReviewHead>
      <RevTitle>{review.summary}</RevTitle>
      <div>{review.body}</div>
        {review.recommend &&
          <div>✔ I recommend this product</div>
        }
        {review.response &&
          <ResponseBox>
            <div style={{fontWeight: 'bold'}}>Response:</div>
            <div>{review.response}</div>
          </ResponseBox>
        }
      <Helpful>Helpful? <Links>Yes</Links> {review.helpfulness} | <Links>Report</Links></Helpful>
    </ReviewCont>
  )
}

const ReviewCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.5em;
  width: 100%;
  color: #303030;;
`
const RevTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ReviewHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const AuthorDate = styled(ReviewHead)`
  font-size: 0.9em;
  color: gray;
  gap: 0.25em;
`
const ResponseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
  justify-content: space-between;
  gap: 1em;
  background-color: #D3D3D3;
  padding: 1em;
`
const Links = styled.a`
  text-decoration: underline;
`

const Helpful = styled.div`
  border-bottom: 2px solid gray;
  padding-bottom: 2em;
`

export default Review;