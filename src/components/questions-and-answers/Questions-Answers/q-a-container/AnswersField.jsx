import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PhotoSection from "./PhotoSection";

const AnswerField = ({ answer }) => {
  const helpfulness = answer.helpfulness;

  const photos = answer.photos;
  const [helpful, setHelpfull] = useState(helpfulness);
  const [reported, setReport] = useState(false);

  const report = () => {
    if (!reported) {
      setReport((preState) => !preState);
    } else {
      return null;
    }
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
            <Button onClick={() => setHelpfull(helpfulness + 1)}>Yes</Button> (
            {helpful}) |
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
  border-bottom: 1px solid ${(props) => props.theme.color};
`;
export default AnswerField;
