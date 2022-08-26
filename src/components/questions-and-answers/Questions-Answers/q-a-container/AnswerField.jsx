import React from "react";
import styled from "styled-components";
import PhotoSection from "./PhotoSection";

const AnswerField = ({ answers }) => {
  const answersArr = Object.values(answers);

  return (
    <Box1>
      {answersArr.map((answer, index) => {
        if (index < 2) {
          let photos = answer.photos;
          return (
            <>
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
                <PhotoSection photos={photos} />
              </Box2>
            </>
          );
        }
      })}
    </Box1>
  );
};

export default AnswerField;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -20px;
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

const Button = styled.button`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
