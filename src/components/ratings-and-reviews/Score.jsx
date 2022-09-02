import React from 'react';
import styled from 'styled-components';
import FiveStarRating from '../shared-components/FiveStarRating';

const Score = ({ score }) => {
  return (
    <ScoreCont>
      <ScoreNum>{score}</ScoreNum>
      <FiveStarRating score={score} />
    </ScoreCont>
  )
}

const ScoreCont = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-weight: 600;
`

const ScoreNum = styled.div`
  font-size: 5em;
  padding-right: .1em;
  color: #303030;
`
export default Score;