import React, { useState } from "react";
import styled from "styled-components";
import AddButton from "./AddButton";

const AddQuestionButton = () => {
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
      <AddButton name={name} onClick={onClick} isOpen={isOpen}>
        <form onSubmit={onSubmit}>
          <label> Turtle </label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </AddButton>
    </div>
  );
};

export default AddQuestionButton;

const name = "ADD A QUESTION";
