import React from "react";
import styled from "styled-components";

const ExpandedImage = (props) => {

  return (
    <div>
      <StyledImage {...props}/>
    </div>
  );
}

const StyledImage = styled.img`
  display: block;
  width: 100%;
`

export default ExpandedImage;