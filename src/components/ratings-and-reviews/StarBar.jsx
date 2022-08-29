import React from 'react';
import styled from 'styled-components';

const StarBar = ({starAmt, starFill}) => {
  let StarBarLevel = {
    width: '0%'
  }
  return (
    <Container>
      <StarLabel>{starAmt}</StarLabel>
      <StarBarCont>
        <StarBarFill style={StarBarLevel}></StarBarFill>
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
  color: #303030;
`
const StarBarCont = styled.div`
  flex: 5;
  height: 0.75em;
  width: 100%;
  background-color: #e8e8e8;
`
const StarBarFill = styled(StarBarCont)`
  position: relative;
  background-color: #303030;;
`

export default StarBar;