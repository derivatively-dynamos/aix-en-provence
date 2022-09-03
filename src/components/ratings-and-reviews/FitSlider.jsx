import React from 'react';
import styled from 'styled-components';

const Slider = ({ characteristic, value }) => {
  let x = (Number(value) / 5) * 100;
  let sliderPos = {
    left: `${x}%`
  }

  return (
    <ColumnCont>
      <h3>{characteristic}</h3>
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
    </ColumnCont>
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
  max-height: 1em;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 0.1em;
  padding-bottom: 1.5em;
`
const ReviewCont = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.25em;
  max-height: 1em;
`
const ReviewBar = styled.div`
  background-color: #e8e8e8;
  max-height: .5em;
  border: .25em solid #e8e8e8;
`
const Indicator = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 0.75em solid #303030;;
`

export default Slider;