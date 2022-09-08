import React from "react";
import styled from "styled-components";

const Modal = ({
  isOpen,
  onClick,
  showCloseButton,
  showHeader,
  children,
  title,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalDiv onClick={onClick}>
      <ModalContentDiv onClick={(e) => e.stopPropagation()}>
        {showHeader ? (
          <ModalHeaderDiv>
            <ModalTitleH4>{title}</ModalTitleH4>
          </ModalHeaderDiv>
        ) : null}

        <ModalBodyDiv>{children}</ModalBodyDiv>
        {showCloseButton ? (
          <ModalFooterDiv>
            <Button onClick={onClick}>Close</Button>
          </ModalFooterDiv>
        ) : null}
      </ModalContentDiv>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom 0;
background-color: rgba(0,0,0,0.75);
display: flex;
align-items: center;
justify-content: center;
z-index: 1000; 

`;

const ModalContentDiv = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const ModalHeaderDiv = styled.div`
  padding: 10px;
`;

const ModalTitleH4 = styled.h4`
  margin: 0px;
  padding: 5px;
  border-bottom: 2px solid #eee;
`;

const ModalBodyDiv = styled.div`
  padding: 10px;
`;

const ModalFooterDiv = styled.div``;

export default Modal;
