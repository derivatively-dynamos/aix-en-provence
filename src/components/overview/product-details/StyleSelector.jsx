import React from "react";
import styled from "styled-components";


const StyleSelector = () => (
  <div>
    <Div><strong>Style > </strong> SELECTED STYLE</Div>
    <div>{IconRow}</div>
    <div>{IconRow}</div>
  </div>
)

const Div = styled.div`
  margin: 1em 0;
  `

const Icon = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px solid cyan;
  background: gray;
  margin-right: 4px;
  `

const IconRow = [];
for(let i = 0; i < 4; i++) {
  IconRow.push(<Icon key={i} src="https://via.placeholder.com/50"/>);
}

export default StyleSelector;