import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import SizeSlider from './SizeSlider.jsx';
import ComfortSlider from './ComfortSlider.jsx';
import Score from './Score.jsx';

const ReviewBreakdown = ({ reviews }) => {
  const [ starBreakdown ] = useState([{ '5 Stars': 3 }, { '4 Stars': 4 }, { '3 Stars': 0 }, { '2 Stars': 0 }, { '1 Stars': 6 }])

  const recByPer = (reviews.map((review) => {
    if (review.recommend) {
      return 1
    } else {
      return 0;
    };
  }).reduce((c, p) => {
    return c + p;
  })) / reviews.length * 100;

  const totalStars = starBreakdown.map((star) => {
    return Object.values(star)[0]
  }).reduce((s, c) => s + c);

  const starFillCalc = (starAmt = 0, totalStars = 0) => {
    return (starAmt / totalStars) * 100;
  }

  return (
    <ColumnCont>
      <Score reviews={reviews}/>
      <ColumnCont>
        <p>{recByPer}% of reviews recommend this product</p>
        {starBreakdown.map((starCat)=> {
          const starKey = Object.keys(starCat)[0][0];
          const starAmt = Object.keys(starCat)[0];
          const starFill = starFillCalc(Object.values(starCat)[0], totalStars);
          return <StarBar key={starKey} totalStars={totalStars} starAmt={starAmt} starFill={starFill}/>
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