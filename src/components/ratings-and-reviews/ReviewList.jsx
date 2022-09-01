import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SortBy from './SortBy.jsx';
import Review from './Review.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

const ReviewList = ({ reviews }) => {
  const [expanded, expand] = useState(false);

  const handleExpansion = () => {
    expanded ? expand(false) : expand(true);
    console.log(expanded)
  }

  return (
    <Container>
      <SortBy reviews={ reviews } />
      <Container>
        {expanded ? reviews.map((review) => {
          return <Review key={review.review_id} review={ review }/>
        })
        : reviews.slice(0, 2).map((review) => {
          return <Review key={review.review_id} review={ review }/>
        })}
      </Container>
      <BtnCont>
        <Btn onClick={()=>{
          handleExpansion();
        }}>{expanded ? 'LESS REVIEWS' : 'MORE REVIEWS'}</Btn>
        <Btn>
          ADD REVIEW
          <Cross icon={faPlusSquare}></Cross>
        </Btn>
      </BtnCont>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 2;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
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
  font-weight: 900;
  padding: 2em;
  border: 0.15em solid #303030;
  gap: 1.5em;
  color: #303030;
`
const Cross = styled(FontAwesomeIcon)`
  font-size: 1.5em;
  color: inherit;
`

export default ReviewList;