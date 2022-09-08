import React, { useState } from "react";
import styled from "styled-components";
import AddButtonComponent from "./AddButtonComponent";
import api from "../../../../shared-components/api";

const AddQuestionButton = ({ productName, productID, setUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    question: "",
  });

  const onClick = () => {
    setIsOpen((preState) => !preState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    for (let key in formValues) {
      if (formValues[key] === "") {
        setHasError(true);
        return;
      } else {
        setHasError(false);
      }
    }

    setIsOpen(false);

    const { username, email, question } = formValues;

    api
      .post(`qa/questions`, {
        body: question,
        name: username,
        email: email,
        product_id: productID,
      })
      .then((res) => {
        console.log("Posted", res);
        setUpdate((preState) => !preState);
      })
      .catch((err) => console.error(err));
  };

  const onChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setFormValues((preState) => ({ ...preState, [name]: value }));
  };

  return (
    <ContainerDiv>
      <AddButtonComponent
        name={name}
        onClick={onClick}
        isOpen={isOpen}
        showHeader={false}
        title={"Ask Your Question"}
        border={true}
        styled={false}
      >
        <Form onSubmit={onSubmit}>
          {" "}
          <H4> About: {productName}</H4>
          <div>
            {hasError ? (
              <Box1>
                <B>You have a form error please fill out any missing inputs!</B>
              </Box1>
            ) : null}
          </div>
          <div> *What is your nickname </div>
          <input
            name="username"
            maxLength="60"
            onChange={onChange}
            placeholder="jack543!"
            type="text"
          />
          <div> *Your email </div>
          <input
            name="email"
            maxLength="60"
            onChange={onChange}
            placeholder="Example: jack@email.com"
            type="text"
          />
          <div> *Your Question</div>
          <textarea
            name="question"
            maxLength="1000"
            onChange={onChange}
            rows="6"
            cols="50"
            placeholder="Answer Here..."
          ></textarea>
          <button>Submit</button>
        </Form>
      </AddButtonComponent>
    </ContainerDiv>
  );
};

export default AddQuestionButton;

const name = "ADD A QUESTION +";

const ContainerDiv = styled.div`
  margin-left: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const H4 = styled.h4`
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Box1 = styled.div`
  margin-bottom: 10px;
`;

const B = styled.b`
  color: red;
`;
