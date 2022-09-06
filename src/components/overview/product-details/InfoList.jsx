import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";

const InfoList = ({features}) => {

  const list = features.map(feature => {
    return <Li key={feature.feature}>{feature.feature}: {feature.value}</Li>
  })

  return (
  <Container>
    <Ul>
      {list}
    </Ul>
  </Container>
)}

const Li = styled.li`
  list-style-type: circle;
  margin: 0;
  padding: 0;
  margin-top: 5px;
`
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: auto;
  margin-left: 20px;
  margin-bottom: 2em;
`
const Container = styled.div`
  display: flex;
`

export default InfoList;