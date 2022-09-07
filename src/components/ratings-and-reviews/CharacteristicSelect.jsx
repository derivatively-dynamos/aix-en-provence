import React from "react";
import styled from "styled-components";

const StarRadio = ({
  handleRadioClick,
  chararacteristic
}) => {
  const rating = [1, 2, 3, 4, 5]

  return (
    <Grid>
      <div>{chararacteristic}</div>
      {rating.map((rating) => {
        return (
          <Container key={chararacteristic + rating.toString()}>
            <label htmlFor={rating}>{rating}</label>
            <Input
              type="radio"
              name={rating}
              onClick={() => handleRadioClick(chararacteristic, rating)}
            />
          </Container>
        )
      })}
    </Grid>
  )
}

const Input = styled.input`
  margin: 0.25em;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr ;
`
export default StarRadio;