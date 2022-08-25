import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ReviewSlider from './ReviewSlider.jsx'

const ReviewBreakdown = () => {
  const [ starBreakdown ] = useState(['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Stars'])

  return (
    <ColumnCont>
      <FlushCont>
        <p style={{fontSize: '400%'}}>5.0</p>
        <p style={{padding: 40}}>⭐⭐⭐⭐⭐</p>
      </FlushCont>
      <ColumnCont>
        <p>100% of reviews recommend this product</p>
        {starBreakdown.map((starAmt)=> {
          return <ReviewSlider stars={starAmt}></ReviewSlider>
        })}
      </ColumnCont>
      <ColumnCont>
        <p>Size</p>
        <ReviewSlider></ReviewSlider>
        <p>Too Small  Perfect Too  Large</p>
        <p>Comfort</p>
        <ReviewSlider></ReviewSlider>
        <p>Poor                      Large</p>
      </ColumnCont>
    </ColumnCont>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`
const FlushCont = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin: 0;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 10px;
`

export default ReviewBreakdown;