import React from 'react';
import styled from 'styled-components';

const ReviewSlider = () => {
  return (
    <>
      <h3>Comfort</h3>
      <ReviewCont>
        <ReviewBar></ReviewBar>
        <ReviewBar></ReviewBar>
        <ReviewBar></ReviewBar>
        <Indicator></Indicator>
      </ReviewCont>
      <SpaceCont>
            <p>Too small</p>
            <p>Too large</p>
      </SpaceCont>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`
const SpaceCont = styled(Container)`
  justify-content: space-between;
  font-size: 90%;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 10px;
`
const ReviewCont = styled(Container)`
  display: flex;
  flex-direction: row;
  gap: 0.25em;
`
const ReviewBar = styled.div`
  max-height: .5em;
  flex: 1;
  border: .25em solid white;
`
const MiddleBar = styled(ReviewBar)`
  flex: 2;
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