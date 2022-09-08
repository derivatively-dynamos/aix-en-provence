import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as empty} from '@fortawesome/free-regular-svg-icons';
import { faStar as filled } from '@fortawesome/free-solid-svg-icons';

const ScoreSelect = ({ userReview, setUserReview }) => {
  let [amount, setAmount] = useState(0)

  const starDisplay = {
    width: `${amount}%`
  }

  const fillStarsToCurrent = (rating) => {
    setUserReview((prevState) => ({
      ...prevState,
      rating: rating
    }))
    setAmount((rating / 5) * 100);
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
        <EmptyStar icon={empty}
          value="1"
          onClick={(e)=>fillStarsToCurrent(1)}
        ></EmptyStar>
        <EmptyStar icon={empty}
          value="2"
          onClick={(e)=>fillStarsToCurrent(2)}
        ></EmptyStar>
        <EmptyStar icon={empty}
          value="3"
          onClick={(e)=>fillStarsToCurrent(3)}
        ></EmptyStar>
        <EmptyStar icon={empty}
          value="4"
          onClick={(e)=>fillStarsToCurrent(4)}
        ></EmptyStar>
        <EmptyStar icon={empty}
          value="5"
          onClick={(e)=>fillStarsToCurrent(5)}
        ></EmptyStar>
      </EmptyStars>
    </StarCont>
  )
}

const StarCont = styled.div`
  position: relative;
  width: 90px;
  padding: 0.5em;
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
  color: yellow;
  font-size: 0.9em;
`
const StarWrap = styled.div`
  flex-basis: 18px;
  flex-shrink: 0;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ScoreSelect;