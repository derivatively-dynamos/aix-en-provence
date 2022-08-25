import React from 'react';
import styled from 'styled-components';

const SizeSlider = () => {
  return (
    <>
      <h3>Size</h3>
      <ReviewCont>
        <ReviewBar></ReviewBar>
        <ReviewBar></ReviewBar>
        <ReviewBar></ReviewBar>
        <Indicator></Indicator>
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

export default SizeSlider;