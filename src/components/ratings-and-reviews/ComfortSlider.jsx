import React from 'react';
import styled from 'styled-components';

const ReviewSlider = () => {
  let x = '3em';
  let sliderPos = {
    transform: `translateX(${x})`
  }
  return (
    <ColumnCont>
      <h3>Comfort</h3>
      <ReviewCont>
        <ReviewBar></ReviewBar>
        <ReviewBar></ReviewBar>
        <ReviewBar></ReviewBar>
        <Indicator style={sliderPos}></Indicator>
      </ReviewCont>
      <SpaceCont>
            <p>Too small</p>
            <p>Too large</p>
      </SpaceCont>
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
  font-size: 0.9em;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 10px;
`
const ReviewCont = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 0.25em;
`
const ReviewBar = styled.div`
  max-height: .5em;
  border: .25em solid #c8c8c8;
`

const Indicator = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 0.75em solid #303030;;
`

export default ReviewSlider;