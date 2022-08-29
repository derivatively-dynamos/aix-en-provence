import React, { useState } from "react";
import styled from "styled-components";

const QuestionsField = ({ question }) => {
  const { question_body: questionBody, question_helpfulness: helpfulness } =
    question;

  const [helpfull, setHelpfull] = useState(helpfulness);
  console.log(helpfull);
  return (
    <Box1>
      <b>Q: {questionBody}</b>
      <div>
        Helpful?
        <Button onClick={() => setHelpfull(helpfulness + 1)}>Yes</Button> (
        {helpfull}) |<Button>Add Answer</Button>
      </div>
    </Box1>
  );
};

export default QuestionsField;

const Box1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box2 = styled.span`
  margin-top: 20px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
