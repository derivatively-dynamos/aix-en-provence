import React, { useState } from "react";
import styled from "styled-components";
import AddButtonComponent from "../Forms/Buttons/AddButtonComponent";

const HelpfulnessAnswerComponent = ({ helpfulness, productName, question }) => {
  const [helpful, setHelpful] = useState(helpfulness);
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
        <Button onClick={() => setHelpful(helpfulness + 1)}>Yes</Button>{" "}
        {helpful} |{" "}
        <AddButtonComponent
          name={"Add Answer"}
          onClick={onClick}
          isOpen={isOpen}
          title={"Submit your Answer"}
          showHeader={true}
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
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            ></input>
            <button>Submit</button>
          </Form>
        </AddButtonComponent>
      </span>
    </div>
  );
};
export default HelpfulnessAnswerComponent;

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
