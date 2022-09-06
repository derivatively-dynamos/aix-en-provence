import React, { useState } from "react";
import Modal from "./ModalForm";
import styled from "styled-components";

const AddButtonComponent = ({
  onClick,
  isOpen,
  name,
  children,
  title,
  showHeader,
  className,
  styled,
}) => {
  return (
    <ButtonDiv>
      <Button styled={styled} onClick={onClick}>
        {name}
      </Button>
      <Modal
        title={title}
        isOpen={isOpen}
        onClick={onClick}
        showCloseButton={false}
        showHeader={showHeader}
        className={className}
      >
        <div>{children}</div>
      </Modal>
    </ButtonDiv>
  );
};

export default AddButtonComponent;

// const Button = styled.button`
//    {
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid black;
//   }
// `;

const ButtonDiv = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  height: 100%;
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.color};
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  ${(props) =>
    props.styled &&
    "background: transparent; letter-spacing: normal; word-spacing: normal; line-height: normal; text-transform: none;text-indent: 0px; text-shadow: none; display: inline-block; text-align: center; border: none; border-bottom: 1px solid white; padding-bottom: 3px "}
`;
