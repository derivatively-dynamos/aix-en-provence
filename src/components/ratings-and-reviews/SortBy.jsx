import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const SortBy = () => {
  return (
    <div>
      <Inline>248 reviews, sorted by </Inline>
      <select>
        <option>helpful</option>
        <option>newest</option>
        <option>relevance</option>
      </select>
    </div>
  )
}

const Inline = styled.div`
  display: inline;
  width: 100%;
`

const Selector = styled.select`
  outline: 0px solid transparent;
  background-color: inherit;
`

export default SortBy;