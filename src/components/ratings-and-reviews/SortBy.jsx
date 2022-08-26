import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const SortBy = () => {
  return (
    <Container>
      <Inline>248 reviews, sorted by</Inline>
      <Selector>
        <option>helpful</option>
        <option>newest</option>
        <option>relevance</option>
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