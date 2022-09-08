import React from 'react';
import styled from 'styled-components';

const StarBar = ({starAmt, starFill, setSort}) => {
  let StarBarLevel = {
    width: `${starFill}%`
  }
  return (
    <Container onClick={() => {setSort(`${starAmt} Stars`)}}>
      <StarLabel>{starAmt} Stars</StarLabel>
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
  white-space: nowrap;
`
const StarBarCont = styled.div`
  flex: 5;
  height: 0.75em;
  width: 100%;
  background-color: #e8e8e8;
`
const StarBarFill = styled(StarBarCont)`
  position: relative;
  background-color: ${props => props.theme.shadow};
`

export default StarBar;