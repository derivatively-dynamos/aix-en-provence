import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import SizeSlider from './SizeSlider.jsx';
import ComfortSlider from './ComfortSlider.jsx';
import Score from './Score.jsx';

const ReviewBreakdown = ({ reviews }) => {

  const [ totalStars, setTotal ] = useState(0);

  const [ stars, setStars] = useState({
    5: { amount: 0, percentage: 0 },
    4: { amount: 0, percentage: 0 },
    3: { amount: 0, percentage: 0 },
    2: { amount: 0, percentage: 0 },
    1: { amount: 0, percentage: 0 }
  });

  useEffect(() => {
    let total = 0;

    const newStars = {
      5: { amount: 0, percentage: 0 },
      4: { amount: 0, percentage: 0 },
      3: { amount: 0, percentage: 0 },
      2: { amount: 0, percentage: 0 },
      1: { amount: 0, percentage: 0 }
    }

    reviews.forEach((review) => {
      total += 1;
      newStars[review.rating].amount += 1;
    })

    for (let star in newStars) {
      newStars[star].percentage = (newStars[star].amount / total) * 100;
    }

    setTotal(total);
    setStars(newStars);
  }, [reviews]);

  console.log(stars)

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
        {Object.keys(stars).reverse().map((starRating)=> {
          return <StarBar
            key={starRating}
            starAmt={starRating}
            starFill={stars[starRating].percentage}
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