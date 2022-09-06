import React from "react";
import Modal from "./ModalForm";
import styled from "styled-components";

const AddButtonComponent = ({
  onClick,
  isOpen,
  name,
  children,
  title,
  showHeader,
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
      >
        <div>{children}</div>
      </Modal>
    </ButtonDiv>
  );
};

export default AddButtonComponent;

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
    "background: transparent; letter-spacing: normal; word-spacing: normal; line-height: normal; text-transform: none;text-indent: 0px; text-shadow: none; display: inline-block; text-align: center; border: none; text-decoration: underline; padding-bottom: 3px "}
`;
