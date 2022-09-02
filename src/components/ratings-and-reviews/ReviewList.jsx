import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SortBy from './SortBy.jsx';
import Review from './Review.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ReviewList = ({ report, markHelpful, reviews, setSort }) => {
  const [expanded, expand] = useState(false);

  const handleExpansion = () => {
    expanded ? expand(false) : expand(true);
  }

  return (
    <Container>
      <SortBy reviewAmt={reviews.length} setSort={setSort} />
      <Container>
        {expanded
          ? reviews.map((review) => {
            return <Review report={report} markHelpful={markHelpful} key={review.review_id} review={ review }/>
          })
          : reviews.slice(0, 2).map((review) => {
            return <Review report={report} markHelpful={markHelpful} key={review.review_id} review={ review }/>
        })}
      </Container>
      <BtnCont>
        {reviews.length > 2 &&
          <Btn onClick={()=>{
            handleExpansion();
          }}>{expanded ? 'LESS REVIEWS' : 'MORE REVIEWS'}</Btn>
        }
        <Btn>
          ADD REVIEW
          <Cross icon={faPlus}></Cross>
        </Btn>
      </BtnCont>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: flex-start;
  width: 100%;
`

const BtnCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding-top: 2.5em;
  padding-left: 1.5em;
`

const Btn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  padding: 2em;
  border: 0.15em solid #303030;
  gap: 1.5em;
  color: #303030;
`
const Cross = styled(FontAwesomeIcon)`
  font-size: 2em;
  color: inherit;
`

export default ReviewList;