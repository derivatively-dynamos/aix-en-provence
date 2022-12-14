import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '../shared-components/Rating.jsx';

const Review = ({ review, markHelpful, report}) => {
  const [reported, setReported] = useState(false);
  const [markedHelpful, setMarkedHelpful] = useState(false);

  let date = new Date(review.date).toLocaleDateString("en-us", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });

  return (
    <ReviewCont>
      <ReviewHead>
        <Rating score={review.rating} />
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
        name='Helpful Button'
        onClick={()=> {
          !reported
          ? (
            markHelpful(review.review_id),
            setMarkedHelpful(true)
          )
          : null
        }
      }>{!markedHelpful
          ? 'Yes'
          : null
        }</UlText> {
          !markedHelpful
          ? review.helpfulness
          : review.helpfulness + 1
          } | <UlText
                name='Report Button'
                onClick={()=> {
                  !reported
                  ? (
                    report(review.review_id),
                    setReported(true)
                  )
                  : null
                }
              }
              >{!reported
                ? 'Report'
                : 'Reported'}
      </UlText>
      </Helpful>
    </ReviewCont>
  )
}

const ReviewCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1.5em;
  width: 100%;
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
  opacity: 0.5;
  gap: 0.25em;
`
const ResponseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
  justify-content: space-between;
  gap: 1em;
  padding: 1em;
`
const UlText = styled.a`
  text-decoration: underline;
  cursor: pointer;
`

const Helpful = styled.div`
  border-bottom: 2px solid gray;
  padding-bottom: 2em;
`

export default Review;