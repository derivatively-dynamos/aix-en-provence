import React, { useState } from "react";
import styled from "styled-components";
import AddButtonComponent from "../Forms/Buttons/AddButtonComponent";
import api from "../../../shared-components/api";

const HelpfulnessAnswerComponent = ({
  helpfulness,
  productName,
  question,
  questionID,
  setUpdate,
}) => {
  const [helpful, setHelpful] = useState(helpfulness);
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    answer: "",
    photos: "",
  });

  const [images, setImages] = useState([]);

  const onClick = () => {
    setIsOpen((preState) => !preState);
  };

  const onClickHelpfulness = () => {
    setHelpful(helpfulness + 1);

    setDisabled(true);
    api
      .put(`qa/questions/${questionID}/helpful`)
      .then((res) => console.log("Posted", res))
      .catch((err) => console.error(err));
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

    const { username, email, answer } = formValues;

    api
      .post(`qa/questions/${questionID}/answers`, {
        body: answer,
        name: username,
        email: email,
      })
      .then((res) => {
        console.log("Posted", res);
        setUpdate((preState) => !preState);
        setImages([]);
        setFormValues((preState) => ({ ...preState, photos: "" }));
      })
      .catch((err) => console.error(err));
  };

  const onChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setFormValues((preState) => ({ ...preState, [name]: value }));
  };

  const handleImageChange = (e) => {
    let fileList = e.target.files;
    let validImages = [...fileList].filter((file) =>
      ["image/jpeg", "image/png"].includes(file.type)
    );
    validImages.forEach((image) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.addEventListener("load", (e) => {
        setImages((prev) => [...prev, e.target.result]);
        setFormValues((preState) => ({ ...preState, photos: images }));
      });
    });
  };

  return (
    <div>
      <span style={{ fontSize: "14px" }}>
        Helpful?{" "}
        <Button disabled={isDisabled} onClick={onClickHelpfulness}>
          Yes
        </Button>{" "}
        <Box2>{helpful}</Box2> |{" "}
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
            <div>
              <input onChange={handleImageChange} type="file" />
              <Container>
                {images.map((image, index) => {
                  return (
                    <Thumbnail src={image} key={questionID + index}></Thumbnail>
                  );
                })}
              </Container>
            </div>
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
  text-decoration: underline;
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

const Box2 = styled.span`
  padding-right: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;
  margin-bottom: 4px;
`;

const Thumbnail = styled.img`
  max-width: 100%;
  width: 80px;
  border-radius: 50%;
  justify-content: ;
  margin-right: 5px;
`;
