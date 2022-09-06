import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PhotoSection from "./PhotoSection";
import api from "../../../shared-components/api";

const AnswerField = ({ answer }) => {
  const helpfulness = answer.helpfulness;

  const photos = answer.photos;
  const [helpful, setHelpful] = useState(helpfulness);
  const [reported, setReport] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const report = () => {
    if (!reported) {
      setReport((preState) => !preState);
    } else {
      return null;
    }

    api
      .put(`qa/answers/${answerID}/report`)
      .then((res) => console.log("Posted", res))
      .catch((err) => console.error(err));
  };

  let answerID = answer.id;

  const onClick = () => {
    setHelpful(helpfulness + 1);

    setDisabled(true);

    api
      .put(`qa/answers/${answerID}/helpful`)
      .then((res) => console.log("Posted", res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Box2>
        <div>
          <b>A:</b> {answer.body}
        </div>
        <PhotoSection photos={photos} answerID={answer.id} />
        <Box3>
          <div>
            {answer.answerer_name == "Seller" ? (
              <b>by {answer.answerer_name},</b>
            ) : (
              `by ${answer.answerer_name},`
            )}
          </div>
          <div style={{ marginLeft: "5px" }}>
            {new Date(answer.date).toLocaleDateString("en-us", {
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
          </div>
          <div>
            | Helpful?{" "}
            <Button disabled={isDisabled} onClick={onClick}>
              Yes
            </Button>{" "}
            ({helpful}) |
            <Button onClick={report}>
              {reported ? <ReportedText>Reported</ReportedText> : "Report"}
            </Button>
          </div>
        </Box3>
      </Box2>
    </div>
  );
};

const Box2 = styled.div`
  flex-direction: column;
  margin: 20px;
`;

const Box3 = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const ReportedText = styled.div`
  background-color: #00af00;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: none;
  text-decoration: underline;
`;
export default AnswerField;
