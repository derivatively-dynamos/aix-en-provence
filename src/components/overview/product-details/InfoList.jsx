import React from "react";
import styled from "styled-components";

const InfoList = ({features}) => {

  const list = features.map(feature => {
    return <Li key={feature.feature}>{feature.feature}: {feature.value}</Li>
  })

  return (
  <Ul>
    {list}
  </Ul>
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

export default InfoList;