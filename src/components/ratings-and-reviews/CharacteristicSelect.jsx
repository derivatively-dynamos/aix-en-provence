import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StarRadio = ({
  handleRadioClick,
  characteristic
}) => {
  const rating = [1, 2, 3, 4, 5]

  const setCharWord = (charNum) => {
    switch (charNum) {
      case '125036':
        return 'Fit';
      case '125037':
        return 'Length';
      case '125060':
        return 'Size';
      case '125061':
        return 'Width';
      case '125062':
        return 'Comfort';
      case '125063':
        return 'Quality';
    }
  }

  return (
    <Grid>
      <div>{setCharWord(characteristic)}</div>
      {rating.map((rating) => {
        return (
          <Container key={characteristic + rating.toString()}>
            <label htmlFor={rating}>{rating}</label>
            <Input
              type="radio"
              name={characteristic + 'radio'}
              required
              onClick={() => handleRadioClick(characteristic, rating)}
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