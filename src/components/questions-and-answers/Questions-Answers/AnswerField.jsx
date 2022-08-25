import React from "react";
import styled from "styled-components";

const AnswerField = () => {
  return (
    <Box1>
      <h3>A:</h3>
      <Box2>
        Icing macaroon bear claw jelly beans chocolate cake. Cookie oat cake
        chocolate helvah \n jelly cake cotton candy souffle topping. Jujube
        topppingsss.
      </Box2>
    </Box1>
  );
};

export default AnswerField;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box2 = styled.span`
  margin: 20px;
`;
