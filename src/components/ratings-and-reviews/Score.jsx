import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as empty} from '@fortawesome/free-regular-svg-icons';
import { faStar as filled } from '@fortawesome/free-solid-svg-icons';

const Score = ({ score }) => {
  const amount = (score / 5) * 100;
  const starDisplay = {
    width: `${amount}%`
  }

  return (
    <ScoreCont>
      <ScoreNum>{score}</ScoreNum>
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
const StarCont = styled.div`
  position: relative;
  width: 90px;
  top: 1em;
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

export default Score;