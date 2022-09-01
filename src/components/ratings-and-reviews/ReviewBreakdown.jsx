import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import SizeSlider from './SizeSlider.jsx';
import ComfortSlider from './ComfortSlider.jsx';
import Score from './Score.jsx';

const ReviewBreakdown = ({ data }) => {

  const [ totalStars, setTotal ] = useState(0);
  const [ starScore, setScore ] = useState(0);
  const [ percentRecommended, setPercentRecommended] = useState(0);
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

    for (let rating in data.ratings) {
      rating = Number(rating);
      newStars[rating].amount = Number(data.ratings[rating]);
      total += newStars[rating].amount;
    }

    for (let star in newStars) {
      newStars[star].percentage = (newStars[star].amount / total) * 100;
    }

    const calcScore = () => {
      let score = 0;
      for (let starRate in newStars) {
        score += starRate * newStars[starRate].amount
      }
      return (score / total).toFixed(1);
    }

    const calcRecommendationPercentage = (recommended) => {
      const recByFraction = Number(recommended.true) / (Number(recommended.true) + Number(recommended.false));
      return Math.round(recByFraction * 100);
    }

    setTotal(total);
    setScore(calcScore())
    setPercentRecommended(calcRecommendationPercentage(data.recommended))
    setStars(newStars);
  }, [data]);

  return (
    <ColumnCont>
      <Score score={starScore}/>
      <ColumnCont>
        <p>{percentRecommended}% of reviews recommend this product</p>
        {Object.keys(stars).reverse().map((starRating)=> {
          return <StarBar
            key={starRating}
            starAmt={starRating}
            starFill={stars[starRating].percentage}
          />
        })}
      </ColumnCont>
      <ColumnCont>
        <SizeSlider size={data.characteristics.Fit.value}></SizeSlider>
        <ComfortSlider comfort={data.characteristics.Comfort.value}></ComfortSlider>
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