import React, { useState } from "react";
import styled from "styled-components";
import AddButtonComponent from "../Forms/Buttons/AddButtonComponent";
import api from "../../../shared-components/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

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
  });

  const [images, setImages] = useState([]);

  const onClick = () => {
    setIsOpen((preState) => !preState);

    if (!isOpen) {
      setImages([]);
    }
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
            <h4 style={{ marginTop: "-10px", marginBottom: "6px" }}>
              {productName}: {question}
            </h4>
            <div>
              {hasError ? (
                <Box1 style={{ fontFamily: "arial" }}>
                  <B>
                    You have a form error please fill out any missing inputs!
                  </B>
                </Box1>
              ) : null}
            </div>
            <div
              style={{
                fontFamily: "arial",
                marginBottom: "5px",
                marginTop: "3px",
              }}
            >
              {" "}
              * What is your nickname{" "}
            </div>
            <Inputs
              name="username"
              onChange={onChange}
              maxLength="60"
              placeholder="jack543!"
              type="text"
            />
            <label
              style={{
                fontFamily: "arial",
                marginTop: "5px",
                marginBottom: "2px",
              }}
            >
              {" "}
              * Your email{" "}
            </label>
            <Inputs
              maxLength="60"
              name="email"
              onChange={onChange}
              placeholder="Example: jack@email.com"
              type="text"
            />
            <div
              style={{
                fontFamily: "arial",
                marginTop: "5px",
                marginBottom: "2px",
              }}
            >
              {" "}
              *Your Answer
            </div>
            <TextBox
              name="answer"
              onChange={onChange}
              maxLength="1000"
              rows="6"
              cols="50"
              placeholder="Answer Here..."
            ></TextBox>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontFamily: "arial",
              }}
            ></div>
            <LabelDiv>
              <StyledLabel>
                Select Image
                <FontAwesomeIcon
                  style={{
                    height: "20px",
                    paddingBottom: "10px",
                  }}
                  icon={faCamera}
                />
                <PhotoButton
                  onChange={handleImageChange}
                  type="file"
                  placeholder="Upload File"
                />
              </StyledLabel>
              <Container>
                {images.map((image, index) => {
                  return (
                    <Thumbnail src={image} key={questionID + index}></Thumbnail>
                  );
                })}
              </Container>
            </LabelDiv>
            <ButtonStyle>Submit</ButtonStyle>
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
  cursor: pointer;
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
  margin-top: 8px;
  margin-bottom: 4px;
`;

const Thumbnail = styled.img`
  max-width: 100%;
  width: 80px;
  max-height: 100%;
  aspect-ratio: auto;
  object-fit: cover;
  justify-content: ;
  margin-right: 5px;
`;

const Inputs = styled.input`
  border-radius: 10px;
  padding: 5px;
  padding-left: 6px;
`;

const TextBox = styled.textarea`
  border-radius: 10px;
  padding-left: 6px;
`;

const PhotoButton = styled.input`
  display: none;
`;

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  height: 100%;
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.color};
  font-size: 14px;
  width: 43%;
  margin-left: 28%;
  cursor: pointer;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 3%;
  border: thin solid ${(props) => props.theme.color};
  width: 24%;
  height: 58px;
  margin-right: 10px;
  padding-top: 5px;
`;

const LabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 3px;
`;

// display: flex;
//     flex-direction: row;
//     align-items: center;
