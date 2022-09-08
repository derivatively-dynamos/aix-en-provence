import React from "react";
import Modal from "../questions-and-answers/Questions-Answers/Forms/Buttons/ModalForm";
import styled from "styled-components";

// must include onClick an isOpen state to be passed down
// examples:

//  const [isOpen, setIsOpen] = useState(false);

// const onClick = () => {
//     setIsOpen((preState) => !preState);
//   };

// customize stylying with showHeader either truthy or falsy
// If including header add title as string
// styled should be set to false

// example of how your props should look
//    <AddButtonComponent
//        name={"NAME ON BUTTON"}
//        onClick={onClick}
//        isOpen={isOpen}
//       showHeader={false}
//       title={"Your Title"}
//       styled={false}>
//
//        FORM GOES HERE
//         </AddButtonComponent>

// Nest your form inside of the AddButtonComponent

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
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  padding: 2em;
  border: 0.15em solid ${(props) => props.theme.color};
  gap: 1.5em;
  color: ${(props) => props.theme.color};
  background-color: ${props => props.theme.shadow};
  ${(props) =>
    props.styled &&
    "background: transparent; letter-spacing: normal; word-spacing: normal; line-height: normal; text-transform: none;text-indent: 0px; text-shadow: none; display: inline-block; text-align: center; border: none; border-bottom: 1px solid white; padding-bottom: 3px "}
`;
