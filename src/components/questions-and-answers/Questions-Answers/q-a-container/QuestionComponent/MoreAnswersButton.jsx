import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const MoreAnswersButton = ({ children }) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <div>
      {isActive ? <Expand>{children}</Expand> : null}
      <button onClick={handleClick}>
        {isActive ? "Collapse answers" : "Load more answers"}
      </button>
    </div>
  );
};

export default MoreAnswersButton;

const animation = keyframes`
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(100px);
  }
`;

const Expand = styled.div`
  animation: 0.5s ${animation};
`;
