import React from "react";
import api from "./api";
import _ from "lodash";
import styled from "styled-components";

const clickTrack = (Component, name) => {
  return (props) => (
    <Div onClick={(e) => throttledTracker(e, name)}>
      <Component {...props} />
    </Div>
  );
};

const handleClickTrack = (e, name) => {
  const body = {
    element: JSON.stringify(e.target.className),
    widget: name,
    time: Date.now() + '',
  }
  api.post('interactions', body).catch(err => console.error(err))
}
const Div=styled.div`
  width: 100%;
`

const throttledTracker = _.throttle(handleClickTrack, 2000);
export default clickTrack;