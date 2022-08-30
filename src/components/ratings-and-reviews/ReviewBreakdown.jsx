import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import SizeSlider from './SizeSlider.jsx';
import ComfortSlider from './ComfortSlider.jsx';
import Score from './Score.jsx';

const ReviewBreakdown = ({ reviews }) => {
  const [ starBreakdown, setStars] = useState({
    5: 0,
    4: 6,
    3: 0,
    2: 3,
    1: 0
  })

  const recByPer = (reviews.map((review) => {
    if (review.recommend) {
      return 1
    } else {
      return 0;
    };
  }).reduce((c, p) => {
    return c + p;
  })) / reviews.length * 100;

  const totalStars = Object.values(starBreakdown).map((starType) => {
    return starType;
  }).reduce((s, c) => s + c);

  const starFillCalc = (starAmt = 0, totalStars = 0) => {
    return (starAmt / totalStars) * 100;
  }

  return (
    <ColumnCont>
      <Score reviews={reviews}/>
      <ColumnCont>
        <p>{recByPer}% of reviews recommend this product</p>
        {Object.keys(starBreakdown).sort().reverse().map((starType)=> {
          const starFill = starFillCalc(starBreakdown[starType], totalStars);
          return <StarBar key={starType} totalStars={totalStars} starAmt={starType} starFill={starFill}/>
        })}
      </ColumnCont>
      <ColumnCont>
        <SizeSlider></SizeSlider>
        <ComfortSlider></ComfortSlider>
      </ColumnCont>
    </ColumnCont>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`
const SpaceCont = styled(Container)`
  justify-content: space-between;
`
const FlushCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  justify-content: space-around;
  padding-right: 10px;
`

export default ReviewBreakdown;