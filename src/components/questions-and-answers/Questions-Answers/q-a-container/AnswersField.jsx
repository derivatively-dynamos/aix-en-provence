import React, { useState } from "react";
import styled from "styled-components";
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
              <Box1>by {answer.answerer_name},</Box1>
            ) : (
              <Box4> by {answer.answerer_name}, </Box4>
            )}
          </div>
          <Box5>
            {new Date(answer.date).toLocaleDateString("en-us", {
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
          </Box5>
          <div style={{ fontSize: "12.5px", marginTop: "2px" }}>
            | <span style={{ marginLeft: "3px" }}>Helpful? </span>
            <Button
              style={{ fontSize: "13px" }}
              disabled={isDisabled}
              onClick={onClick}
            >
              Yes
            </Button>{" "}
            <span style={{ marginRight: "2px" }}>{helpful}</span> |
            <Button onClick={report}>
              {reported ? (
                <ReportedText>Reported</ReportedText>
              ) : (
                <span style={{ marginLeft: "3px", fontSize: "12.5px" }}>
                  Report
                </span>
              )}
            </Button>
          </div>
        </Box3>
      </Box2>
    </div>
  );
};

const Box1 = styled.b`
  font-size: 13px;
`;

const Box2 = styled.div`
  flex-direction: column;
  margin: 20px;
`;

const Box3 = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const Box4 = styled.span`
  font-size: 13px;
`;

const Box5 = styled.span`
  margin-left: 5px;
  margin-top: 2px;
  margin-right: 6px;
  font-size: 13px;
`;

const ReportedText = styled.div`
  background-color: #dc143c;
  font-size: 12.5px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;
export default AnswerField;
