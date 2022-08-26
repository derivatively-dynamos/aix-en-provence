import React from 'react';
import styled from 'styled-components';

const Score = ({stars, reviews}) => {
  const starAvg = reviews.reduce((curr, next) => (curr.rating + next.rating) / reviews.length)
  const starPer = (starAvg / 5) * 100;
  const starPerRounded = `${Math.round(starPer / 10) * 10}%`;

  // let starDisplay = '';
  // while (starDisplay.length < starAvg) {
  //   starDisplay += '⭐';
  // }

  return (
    <ScoreCont>
      <ScoreNum>{starAvg}</ScoreNum>
      {/* <ScoreStars>{starDisplay}</ScoreStars> */}
    </ScoreCont>
  )
}

const ScoreCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-weight: 600;
`

const ScoreNum = styled.div`
  margin-top: 0;
  font-size: 5em;
  padding-right: .1em;
  color: #303030;
`
const ScoreStars = styled.div`
  margin-top: 0;
  margin-bottom: 3em;
`
const OuterStar = styled.div`
  position: relative;
  display: inline-block;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 200;
    color: #ccc;
  }
`
const InnerStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  &:before {
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: 'Font Awesome 5 Free';
    font-weight: 200;
    color: #000000;
  }
`

export default Score;