import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import SizeSlider from './SizeSlider.jsx';
import ComfortSlider from './ComfortSlider.jsx';
import Score from './Score.jsx';

const ReviewBreakdown = ({ reviews }) => {
  const [ starBreakdown, setStars] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  })

  const [ starPercentages, setStarPercentage ] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  })

  useEffect(() => {
    reviews.forEach((review) => {
      populateStarAmt(review.rating);
    })
  }, [reviews]);

  useEffect(() => {
    for (let starCategory in starBreakdown) {
      populateStarPercentage(starCategory)
    }
  }, [starBreakdown])

  const populateStarAmt = (rating) => {
    const newStarAmts = starBreakdown;
    newStarAmts[rating] += 1;
    setStars(newStarAmts);
  }

  const calcStarPercentage = (starAmt) => {
    const totalStars = Object.values(starBreakdown).reduce((total, current) => total + current);
    return (starAmt / totalStars) * 100;
  }

  const populateStarPercentage = (rating) => {
    const newStarPercentages = starPercentages;
    newStarPercentages[rating] = calcStarPercentage(starBreakdown[rating]);
    setStarPercentage(newStarPercentages);
  }

  const recommendationByPercent = (reviews.map((review) => {
    if (review.recommend) {
      return 1
    } else {
      return 0;
    };
  }).reduce((c, p) => {
    return c + p;
  })) / reviews.length * 100;

  return (
    <ColumnCont>
      <Score reviews={reviews}/>
      <ColumnCont>
        <p>{recommendationByPercent}% of reviews recommend this product</p>
        {Object.keys(starPercentages).map((starRating)=> {
          console.log('starrating', starRating)
          return <StarBar
            key={starRating}
            starAmt={starRating}
            starFill={starPercentages[starRating]}
          />
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