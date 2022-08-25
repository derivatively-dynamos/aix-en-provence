import React from 'react';
import styled from 'styled-components';

const ReviewBreakdown = () => {

  return (
    <RevBdCont>
      <FlushCont>
        <p style={{fontSize: '400%'}}>3.5</p>
        <div>⭐⭐⭐⭐⭐</div>
      </FlushCont>
      <RevBdCont>
        <p>100% of reviews recommend this product</p>
        <p>5 Stars ------------</p>
        <p>4 Stars ------------</p>
        <p>3 Stars ------------</p>
        <p>2 Stars ------------</p>
        <p>1 Stars ------------</p>
      </RevBdCont>
      <RevBdCont>
        <p>Size</p>
        <p>------------</p>
        <p>Too Small   Perfect Too   Large</p>
        <p>Comfort</p>
        <p>------------</p>
        <p>Poor                      Large</p>
      </RevBdCont>
    </RevBdCont>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0.5em;
  background-color: maroon;
`
const FlushCont = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin: 0;
`

const RevBdCont = styled(Container)`
  flex-direction: column;
`

export default ReviewBreakdown;