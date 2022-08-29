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
`
const H4 = styled.h4`

`
const P = styled.p`

`

export default Description;