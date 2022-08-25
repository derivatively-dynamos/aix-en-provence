import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx'
import ReviewSlider from './ReviewSlider.jsx'

const ReviewBreakdown = () => {
  const [ starBreakdown ] = useState(['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Stars'])

  return (
    <ColumnCont>
      <FlushCont>
        <p style={{fontSize: '400%', paddingRight: ".1em"}}>5.0</p>
        <p style={{marginTop: 0, marginBottom: '2em'}}>⭐⭐⭐⭐⭐</p>
      </FlushCont>
      <ColumnCont>
        <p>100% of reviews recommend this product</p>
        {starBreakdown.map((starAmt)=> {
          return (
            <>
              <StarBar key={starAmt[0]} stars={starAmt}></StarBar>
            </>
          )
        })}
      </ColumnCont>
      <ColumnCont>
        <h3>Size</h3>
        <ReviewSlider></ReviewSlider>
        <SpaceCont>
          <p>Too small</p>
          <p>Perfect</p>
          <p>Too large</p>
        </SpaceCont>
        <h3>Comfort</h3>
        <ReviewSlider></ReviewSlider>
        <SpaceCont>
          <p>Poor</p>
          <p>Perfect</p>
        </SpaceCont>
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
  margin: 0;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 10px;
`

export default ReviewBreakdown;