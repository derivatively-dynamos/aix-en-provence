import React from 'react';
import styled from 'styled-components';

const StarBar = ({stars}) => {
  return (
    <Container>
      <StarLabel>{stars}</StarLabel>
      <StarBarCont>
        <StarBarFill></StarBarFill>
      </StarBarCont>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5em;
`
const StarLabel = styled(Container)`
  text-decoration: underline;
  flex: 1;
  padding-right: 0.5em;
`
const StarBarCont = styled.div`
  flex: 5;
  height: 0.5em;
  width: 100%;
  background-color: white;
`
const StarBarFill = styled(StarBarCont)`
  position: relative;
  width: 30%;
  background-color: black;
`

export default StarBar;