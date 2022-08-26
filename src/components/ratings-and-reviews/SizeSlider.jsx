import React from 'react';
import styled from 'styled-components';

const SizeSlider = ({}) => {
  let x = '1em';
  let sliderPos = {
    transform: `translateX(${x})`
  }

  return (
    <>
      <h3>Size</h3>
      <ReviewCont>
        <ReviewBar></ReviewBar>
        <ReviewBar></ReviewBar>
        <ReviewBar></ReviewBar>
        <Indicator style={sliderPos}></Indicator>
      </ReviewCont>
      <SpaceCont>
            <p>Too small</p>
            <p>Perfect</p>
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
  font-size: 0.9em;
  justify-content: space-between;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 10px;
`
const ReviewCont = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.25em;
`
const ReviewBar = styled.div`
  max-height: .5em;
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

export default SizeSlider;