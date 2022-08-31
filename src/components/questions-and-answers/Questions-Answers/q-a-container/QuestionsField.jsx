import React, { useState } from "react";
import styled from "styled-components";
import AnswersComponent from "./AnswersComponent";
import AddButton from "../Forms/Buttons/AddButton";

const QuestionsField = ({ question }) => {
  const {
    question_body,
    answers: questionsAnswers,
    question_helpfulness: helpfulness,
    question_id,
  } = question;

  const productName = `Slacker's Slacks`;
  // will need to get product name passed down as props

  console.log(question);

  const answers = Object.values(questionsAnswers);

  return (
    <>
      <div>
        <Box1>
          <div>
            <b>Q:</b> {question_body}
          </div>
          <Helpfullness
            helpfulness={helpfulness}
            productName={productName}
            question={question_body}
          />
        </Box1>
        <AnswersComponent answers={answers} />
      </div>
    </>
  );
};

const Helpfullness = ({ helpfulness, productName, question }) => {
  const [helpfull, setHelpfull] = useState(helpfulness);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((preState) => !preState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    /// API call

    setIsOpen(false);
  };

  return (
    <div>
      <span>
        Helpful?{" "}
        <Button onClick={() => setHelpfull(helpfulness + 1)}>Yes</Button>{" "}
        {helpfull} |{" "}
        <AddButton
          name={"Add Answer"}
          onClick={onClick}
          isOpen={isOpen}
          title={"Submit your Answer"}
        >
          <Form onSubmit={onSubmit}>
            <h4>
              {productName}: {question}
            </h4>
            <label> Display Name </label>
            <input type="text" />
            <label> Email </label>
            <input type="text" />
            <button>Submit</button>
          </Form>
        </AddButton>
      </span>
    </div>
  );
};

export default QuestionsField;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: left;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
