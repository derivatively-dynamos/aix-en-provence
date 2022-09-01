import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as empty} from '@fortawesome/free-regular-svg-icons';
import { faStar as filled } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
  const amount = (review.rating / 5) * 100;
  const starDisplay = {
    width: `${amount}%`
  }

  let date = new Date(review.date).toLocaleDateString("en-us", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });


  return (
    <ReviewCont>
      <ReviewHead>
        <StarCont>
          <FilledStars style={starDisplay}>
            <FullStar icon={filled}></FullStar>
            <FullStar icon={filled}></FullStar>
            <FullStar icon={filled}></FullStar>
            <FullStar icon={filled}></FullStar>
            <FullStar icon={filled}></FullStar>
          </FilledStars>
          <EmptyStars>
            <EmptyStar icon={empty}></EmptyStar>
            <EmptyStar icon={empty}></EmptyStar>
            <EmptyStar icon={empty}></EmptyStar>
            <EmptyStar icon={empty}></EmptyStar>
            <EmptyStar icon={empty}></EmptyStar>
          </EmptyStars>
        </StarCont>
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
const ReviewHead = styled.div`
  display: flex;
  justify-content: space-between;
`
const StarCont = styled.div`
  position: relative;
  width: 90px;
`
const FilledStars = styled.div`
  position: absolute;
  display: flex;
  overflow: hidden;
  background-color: inherit;
  font-weight: 500;
`
const EmptyStars = styled.div`
  position: absolute;
  display: flex;
`
const EmptyStar = styled(FontAwesomeIcon)`
  position: relative;
  display: flex;
  color: black;
  font-weight: 900;
`
const FullStar = styled(FontAwesomeIcon)`
  position: relative;
  color: yellow;
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
const Links = styled.a`
  text-decoration: underline;
`

const Helpful = styled.div`
  border-bottom: 2px solid gray;
  padding-bottom: 2em;
`

export default Review;