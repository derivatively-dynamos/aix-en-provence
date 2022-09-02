import React, { useState } from 'react';
import styled from 'styled-components';
import FiveStarRating from '../shared-components/FiveStarRating';

const Review = ({ report, markHelpful, review }) => {
  const [ markedHelpful, setMarkedHelpful ] = useState(false);
  const [ reported, setReported ] = useState(false);

  let date = new Date(review.date).toLocaleDateString("en-us", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });

  return (
    <ReviewCont>
      <ReviewHead>
        <FiveStarRating score={review.rating} />
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
      <Helpful>Helpful? <UlText
        onClick={()=> {
          setMarkedHelpful(true);
          markHelpful();
        }
      }>{!markedHelpful
          ? 'Yes'
          : null
        }</UlText> {review.helpfulness} | <UlText
        onClick={()=> {
          report();
        }
      }>Report</UlText></Helpful>
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
const ReviewHead = styled.div`
  display: flex;
  justify-content: space-between;
`
const RevTitle = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
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
  background-color: #e8e8e8;
  padding: 1em;
`
const UlText = styled.a`
  text-decoration: underline;
`

const Helpful = styled.div`
  border-bottom: 2px solid gray;
  padding-bottom: 2em;
`

export default Review;