import React from "react";
import styled from "styled-components";

const InfoList = () => (
  <Ul>
    <Li>
      GMO and Pesticide-free
    </Li>
    <Li>
      Made with 100% Genetic Modification
    </Li>
    <Li>
      This is made up
    </Li>
  </Ul>
)

const Li = styled.li`
  list-style-type: circle;
  margin: 0;
  padding: 0;
  margin-top: 5px;
`
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: 20px;
  margin-top: 5px;
`

export default InfoList;