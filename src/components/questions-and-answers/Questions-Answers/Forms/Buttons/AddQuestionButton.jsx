import React, { useState } from "react";
import styled from "styled-components";
import AddButtonComponent from "./AddButtonComponent";

const AddQuestionButton = ({ productName }) => {
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
      <AddButtonComponent
        name={name}
        onClick={onClick}
        isOpen={isOpen}
        title={"Ask Your Question"}
      >
        <Form onSubmit={onSubmit}>
          <h4> About the {productName}</h4>
          <label> *What is your nickname </label>
          <input maxlength="60" placeholder="jack543!" type="text" />
          <label> *Your email </label>
          <input
            maxlength="60"
            placeholder="Example: jack@email.com"
            type="text"
          />
          <label> *Your Answer</label>
          <textarea
            maxlength="1000"
            rows="6"
            cols="50"
            placeholder="Answer Here..."
          ></textarea>
          <button>Submit</button>
        </Form>
      </AddButtonComponent>
    </div>
  );
};

export default AddQuestionButton;

const name = "ADD A QUESTION";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
