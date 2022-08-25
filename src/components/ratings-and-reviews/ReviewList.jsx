import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SortBy from './SortBy.jsx'

const ReviewList = () => {
  return (
    <ColumnCont>
      <SortBy />
    </ColumnCont>
  )
}

const Container = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
`

const ColumnCont = styled(Container)`
  flex-direction: column;
  padding-right: 10px;
`
export default ReviewList;