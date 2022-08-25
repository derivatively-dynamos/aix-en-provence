import React from 'react';
import styled from 'styled-components';

const ReviewSlider = ({starAmt}) => {
  return (
    <ReviewCont>
      <ReviewBar></ReviewBar>
      <ReviewBar></ReviewBar>
      <ReviewBar></ReviewBar>
      <Indicator></Indicator>
    </ReviewCont>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 10px;
`
const ReviewCont = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5em;
`
const ReviewBar = styled.div`
  width: 5em;
  height: .25em;
  border: .25em solid white
`
const Indicator = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
`

export default ReviewSlider;