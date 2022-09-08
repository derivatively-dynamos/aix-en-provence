import React from 'react';
import styled from 'styled-components';
import Rating from '../shared-components/Rating.jsx';

const Score = ({ score }) => {
  return (
    <ScoreCont>
      <ScoreNum>{score}</ScoreNum>
      <Rating score={score} />
    </ScoreCont>
  )
}

const ScoreCont = styled.div`
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
`
export default Score;