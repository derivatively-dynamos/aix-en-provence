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
        <Box3>
          by User1234, Jan 1, 2019 | Helpful? <Button>Yes</Button> (23) |{" "}
          <Button>Report</Button>
        </Box3>
      </Box2>
    </Box1>
  );
};

export default AnswerField;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box2 = styled.div`
  flex-direction: column;
  margin: 20px;
`;

const Box3 = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
