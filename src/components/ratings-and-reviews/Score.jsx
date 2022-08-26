import React from 'react';
import styled from 'styled-components';

const Score = ({stars, reviews}) => {
  const starAvg = reviews.reduce((curr, next) => (curr.rating + next.rating) / reviews.length)

  let starDisplay = '';
  while (starDisplay.length < starAvg) {
    if (starAvg % 1 != 0) {
      const leftover = starAvg % 1;
      switch (leftover) {
        case 0.5: starDisplay += '🌟';
        default: starDisplay += '⭐';
      }
    } else {
      starDisplay += '⭐';
    }
  }

  return (
    <ScoreCont>
      <ScoreNum>{starAvg}</ScoreNum>
      <ScoreStars>{starDisplay}</ScoreStars>
    </ScoreCont>
  )
}

const ScoreCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const ScoreNum = styled.div`
  margin-top: 0;
  font-size: 5em;
  padding-right: .1em;
`
const ScoreStars = styled.div`
  margin-top: 0;
  margin-bottom: 3em;
`

export default Score;