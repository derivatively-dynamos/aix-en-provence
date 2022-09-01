import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Score = ({ score }) => {
  return (
    <ScoreCont>
      <ScoreNum>{score}</ScoreNum>
      <ScoreCont>
        <StarCont>
          <FullStar icon={faStar}></FullStar>
          <FullStar icon={faStar}></FullStar>
          <FullStar icon={faStar}></FullStar>
          <FullStar icon={faStar}></FullStar>
          <FullStar icon={faStar}></FullStar>
        </StarCont>
        <StarCont>
          <StarCover></StarCover>
        </StarCont>
        <StarCont>
          <EmptyStar icon={faStar}></EmptyStar>
          <EmptyStar icon={faStar}></EmptyStar>
          <EmptyStar icon={faStar}></EmptyStar>
          <EmptyStar icon={faStar}></EmptyStar>
          <EmptyStar icon={faStar}></EmptyStar>
        </StarCont>
      </ScoreCont>
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
const StarCont = styled.div`
  position: absolute;
  margin-top: 0;
  margin-bottom: 3em;
`
const EmptyStar = styled(FontAwesomeIcon)`
  position: relative;
  color: black;
`
const StarCover = styled.div`
  position: relative;
  background-color: gray;
  height: 1em;
`
const FullStar = styled(FontAwesomeIcon)`
  position: relative;
  color: red;
`

export default Score;