import React, { useState } from "react";
import styled from "styled-components";
import AnswersComponent from "./AnswersComponent";
import AddButtonComponent from "../Forms/Buttons/AddButtonComponent";

const QuestionsField = ({ question, productName }) => {
  const {
    question_body,
    answers: questionsAnswers,
    question_helpfulness: helpfulness,
  } = question;

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
        <AddButtonComponent
          name={"Add Answer"}
          onClick={onClick}
          isOpen={isOpen}
          title={"Submit your Answer"}
        >
          <Form onSubmit={onSubmit}>
            <h4>
              {productName}: {question}
            </h4>
            <div> *What is your nickname </div>
            <input maxLength="60" placeholder="jack543!" type="text" />
            <label> *Your email </label>
            <input
              maxLength="60"
              placeholder="Example: jack@email.com"
              type="text"
            />
            <div> *Your Answer</div>
            <textarea
              maxLength="1000"
              rows="6"
              cols="50"
              placeholder="Answer Here..."
            ></textarea>
            <div> Upload your photos </div>
            <input type="file" accept="image/*"></input>
            <button>Submit</button>
          </Form>
        </AddButtonComponent>
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
