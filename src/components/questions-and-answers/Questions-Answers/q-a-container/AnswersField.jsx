import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PhotoSection from "./PhotoSection";

const AnswerField = ({ answer }) => {
  const helpfulness = answer.helpfulness;
  const photos = answer.photos;
  const [helpfull, setHelpfull] = useState(helpfulness);

  return (
    <div>
      <Box2>
        <div>
          <b>A:</b> {answer.body}
        </div>
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
            | Helpful? <Button>Yes</Button> ({answer.helpfulness}) |
            <Button>Report</Button>
          </div>
        </Box3>
        <PhotoSection photos={photos} answerID={answer.id} />
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

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
export default AnswerField;
