import React from "react";
import api from "./api";
import _ from "lodash";

const clickTrack = (Component, name) => {
  return (props) => (
    <div onClick={(e) => throttledTracker(e, name)}>
      <Component {...props} />
    </div>
  );
};

const handleClickTrack = (e, name) => {
  const body = {
    element: e.target.className,
    widget: name,
    time: Date.now() + '',
  }
  api.post('interactions', body).catch(err => console.error(err))
}

const throttledTracker = _.throttle(handleClickTrack, 500);
export default clickTrack;