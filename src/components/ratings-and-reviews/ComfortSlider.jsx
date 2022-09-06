import React from 'react';
import styled from 'styled-components';

const ReviewSlider = ({characteristic, comfort }) => {
  let x = (Number(comfort) / 5) * 100;
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
            <p>Poor</p>
            <p>Perfect</p>
      </SpaceCont>
    </ColumnCont>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding-bottom: 1em;
`
const SpaceCont = styled(Container)`
  justify-content: space-between;
  font-size: 0.9em;
  max-height: 1em;
`
const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 10px;
`
const ReviewCont = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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

export default ReviewSlider;