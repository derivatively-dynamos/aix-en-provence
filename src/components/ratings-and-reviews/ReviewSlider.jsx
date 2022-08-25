import React from 'react';
import styled from 'styled-components';

const ReviewSlider = ({stars}) => {
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
  flex-direction: row;
  justify-content: space-between;
  gap: 0.25em;
`
const ReviewBar = styled.span`
  height: .5em;
  width: 33%;
  border: .25em solid white;
`
const Indicator = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 0.75em solid black;
`

export default ReviewSlider;