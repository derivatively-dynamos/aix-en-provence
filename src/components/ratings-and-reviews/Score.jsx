import React from 'react';
import styled from 'styled-components';

const Score = ({stars}) => {
  return (
    <ScoreCont>
      <ScoreNum>5.0</ScoreNum>
      <ScoreStars>⭐⭐⭐⭐⭐</ScoreStars>
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