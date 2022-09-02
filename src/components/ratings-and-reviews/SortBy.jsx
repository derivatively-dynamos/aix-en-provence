import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const SortBy = ({ reviewAmt, setSort }) => {
  return (
    <Container>
      <Inline>{reviewAmt} reviews, sorted by</Inline>
      <Selector
        onChange={() => {
          setSort(event.target.value);
          console.log('e target:', event.target.value)
        }}
      >
        <option value="relevance" defaultValue>relevance</option>
        <option value="helpfulness">helpfulness</option>
        <option value="newest">newest</option>
      </Selector>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 1.5em;
`

const Inline = styled.div`
  display: inline;
  width: 100%;
  color: #303030;
  font-size: 1.25em;
  font-weight: 600;
`

const Selector = styled.select`
  outline: 0px solid transparent;
  border: 0 solid transparent;
  background-color: inherit;
  color: #303030;
  font-size: 1.25em;
  font-weight: 600;
`

export default SortBy;