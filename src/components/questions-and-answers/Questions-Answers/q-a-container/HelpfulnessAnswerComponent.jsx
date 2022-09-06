import React, { useState } from "react";
import styled from "styled-components";
import AddButtonComponent from "../Forms/Buttons/AddButtonComponent";

const HelpfulnessAnswerComponent = ({ helpfulness, productName, question }) => {
  const [helpful, setHelpful] = useState(helpfulness);
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    answer: "",
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

    /// API call
  };

  const onChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setFormValues((preState) => ({ ...preState, [name]: value }));
  };
  console.log(hasError);
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
          styled={true}
        >
          <Form onSubmit={onSubmit}>
            <h4>
              {productName}: {question}
            </h4>
            <div>
              {hasError ? (
                <Box1>
                  <B>
                    You have a form error please fill out any missing inputs!
                  </B>
                </Box1>
              ) : null}
            </div>
            <div> *What is your nickname </div>
            <input
              name="username"
              onChange={onChange}
              maxLength="60"
              placeholder="jack543!"
              type="text"
            />
            <label> *Your email </label>
            <input
              maxLength="60"
              name="email"
              onChange={onChange}
              placeholder="Example: jack@email.com"
              type="text"
            />
            <div> *Your Answer</div>
            <textarea
              name="answer"
              onChange={onChange}
              maxLength="1000"
              rows="6"
              cols="50"
              placeholder="Answer Here..."
            ></textarea>
            <div> Upload your photos </div>
            <input
              type="file"
              accept="image/*"
              name="file"
              onChange={onChange}
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
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  background: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color};
`;

const Box1 = styled.div`
  margin-bottom: 10px;
`;

const Form = styled.form`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
`;

const B = styled.b`
  color: red;
`;
