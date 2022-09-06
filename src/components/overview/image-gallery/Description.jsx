import React from "react";
import styled from "styled-components";

const Description = ({slogan, description}) => {

  return(
    <Container>
      <h4>{slogan}</h4>
      <P>{description}</P>
    </Container>
  )
}

const Container = styled.section`
  user-select: text;
  color: ${props => props.theme.color};
  min-height: 8em;
  width: 90%;
  align-self: center;
`
const H4 = styled.h4`

`
const P = styled.p`
  margin-bottom: 0;
`

export default Description;