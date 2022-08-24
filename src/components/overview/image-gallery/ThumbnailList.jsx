import React from "react";
import styled from "styled-components";

const ThumbnailList = () => (
  <Ul>
    <Icon src="https://via.placeholder.com/50"/>
    <Icon src="https://via.placeholder.com/50"/>
    <Icon src="https://via.placeholder.com/50"/>
  </Ul>
)
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: 10px;
`
const Icon = styled.img`
  height: 80px;
  width: 80px;
  border: 1px solid red;
  background: gray;
  margin-right: 4px;
  margin-top: 5px;
  `

export default ThumbnailList;