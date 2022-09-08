import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SortBy from './SortBy.jsx';
import Review from './Review.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import ModalButton from './ModalButton.jsx'

const ReviewList = ({
    setSort,
    reviews,
    markHelpful,
    report,
    isOpen,
    setIsOpen,
    userReview,
    setUserReview
  }) => {
  const [expanded, expand] = useState(false);

  const handleExpansion = () => {
    expanded ? expand(false) : expand(true);
  }

  const onClick = () => {
    setIsOpen((preState) => !preState);
  };

  return (
    <ReviewListContainer>
      <SortBy
        setSort={setSort}
        reviews={ reviews } />
      <Container>
        {expanded
        ? reviews.map((review) => {
          return <Review
          key={review.review_id}
          review={ review }
          markHelpful={markHelpful}
          report={report}
          />
        })
        : reviews.slice(0, 2).map((review) => {
          return <Review
          key={review.review_id}
          review={ review }
          markHelpful={markHelpful}
          report={report}
          />
        })}
      </Container>
      <BtnCont>
        {reviews.length < 2
          ? null
          : (
              <Btn
                onClick={()=>{
                  handleExpansion();
                }}
              >
              {expanded
                ? 'LESS REVIEWS'
                : 'MORE REVIEWS'}
              </Btn>
          )
        }
        <ModalButton
          onClick={onClick}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          userReview={userReview}
          setUserReview={setUserReview}
        />
      </BtnCont>
    </ReviewListContainer>
  )
}

const Container = styled.div`
  display: flex;
  flex: 2;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  max-height: 78vh;
  overflow: auto;
`
const ReviewListContainer = styled(Container)`
  max-height: 100vh;
`

const BtnCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding-top: 2.5em;
  padding-left: 1.5em;
`

const Btn = styled.button`
  cursor: pointer;
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  padding: 2em;
  border: 0.15em solid ${(props) => props.theme.color};
  gap: 1.5em;
  color: ${(props) => props.theme.color};
  background-color: ${props => props.theme.shadow};
`
const Cross = styled(FontAwesomeIcon)`
  font-size: 1.5em;
`

export default ReviewList;