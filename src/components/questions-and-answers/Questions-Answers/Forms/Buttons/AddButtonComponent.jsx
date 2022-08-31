import React, { useState } from "react";
import Modal from "./ModalForm";
import styled from "styled-components";

const AddButtonComponent = ({ onClick, isOpen, name, children, title }) => {
  return (
    <ButtonDiv>
      <Button onClick={onClick}>{name}</Button>
      <Modal
        title={title}
        isOpen={isOpen}
        onClick={onClick}
        showCloseButton={false}
      >
        <div>{children}</div>
      </Modal>
    </ButtonDiv>
  );
};

export default AddButtonComponent;

const Button = styled.button`
   {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
  }
`;

const ButtonDiv = styled.div`
  display: inline-block;
`;
