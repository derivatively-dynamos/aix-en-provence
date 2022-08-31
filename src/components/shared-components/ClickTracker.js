import React from "react";
import api from "./api";

const clickTrack = (Component, name) => {
  return (props) => (
    <div onClick={(e) => handleClickTrack(e, name)}>
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

export default clickTrack;