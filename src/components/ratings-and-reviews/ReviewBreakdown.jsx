import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import SizeSlider from './SizeSlider.jsx';
import ComfortSlider from './ComfortSlider.jsx';
import Score from './Score.jsx';

const ReviewBreakdown = ({product}) => {
  const [ starBreakdown ] = useState(['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Stars'])

  const reviews = product.results;

  return (
    <ColumnCont>
      <Score reviews={reviews}/>
      <ColumnCont>
        <p>100% of reviews recommend this product</p>
        {starBreakdown.map((starAmt)=> {
          return <StarBar key={starAmt[0]} stars={starAmt} reviews={reviews}/>
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
  padding-right: 10px;
`

export default ReviewBreakdown;