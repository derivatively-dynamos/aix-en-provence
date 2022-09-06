import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as empty} from '@fortawesome/free-regular-svg-icons';
import { faStar as filled } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ score }) => {
  const amount = (score / 5) * 100;
  const starDisplay = {
    width: `${amount}%`
  }

  return (
    <StarCont>
      <FilledStars style={starDisplay}>
        <StarWrap>
          <FullStar icon={filled}></FullStar>
        </StarWrap>
        <StarWrap>
          <FullStar icon={filled}></FullStar>
        </StarWrap>
        <StarWrap>
          <FullStar icon={filled}></FullStar>
        </StarWrap>
        <StarWrap>
          <FullStar icon={filled}></FullStar>
        </StarWrap>
        <StarWrap>
          <FullStar icon={filled}></FullStar>
        </StarWrap>
      </FilledStars>
      <EmptyStars>
        <EmptyStar icon={empty}></EmptyStar>
        <EmptyStar icon={empty}></EmptyStar>
        <EmptyStar icon={empty}></EmptyStar>
        <EmptyStar icon={empty}></EmptyStar>
        <EmptyStar icon={empty}></EmptyStar>
      </EmptyStars>
    </StarCont>
  )
}

const StarCont = styled.div`
  position: relative;
  width: 90px;
`
const FilledStars = styled.div`
  position: absolute;
  display: flex;
  overflow: hidden;
  background-color: inherit;
`
const EmptyStars = styled.div`
  position: absolute;
  display: flex;
`
const EmptyStar = styled(FontAwesomeIcon)`
  position: relative;
  display: flex;
  color: black;
`
const FullStar = styled(FontAwesomeIcon)`
  position: relative;
  color: ${props => props.theme.reviewColor};
  font-size: 0.8em;
`
const StarWrap = styled.div`
  flex-basis: 18px;
  flex-shrink: 0;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Rating;