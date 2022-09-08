import React, { useState } from "react";
import styled from "styled-components";
import AnswersField from "./AnswersField";

const AnswersComponent = ({ answers }) => {
  const [loadMore, setLoadMore] = useState(false);

  const handleClick = () => {
    setLoadMore((prevState) => !prevState);
  };

  return (
    <section>
      <Box1>
        <Box2>
          {answers
            .sort((a, b) => {
              if (b.answerer_name === "Seller") {
                return 1;
              }
              if (a.answerer_name === "Seller") {
                return -1;
              }
              return 0;
            })
            .map((answer, index) => {
              if (!loadMore && index < 2) {
                return <AnswersField key={answer.id} answer={answer} />;
              } else if (loadMore) {
                return <AnswersField key={answer.id} answer={answer} />;
              }
            })}
        </Box2>
        <div>
          {answers.length > 2 ? (
            <Button onClick={handleClick}>
              {" "}
              {loadMore ? "Collapse" : "Load More Answers"}
            </Button>
          ) : null}
        </div>
      </Box1>
    </section>
  );
};

export default AnswersComponent;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -20px;
`;

const Box2 = styled.div`
  max-height: 300px;
  overflow: auto;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: flex;
  margin-bottom: 10px;
  margin-left: 20px;
  background: transparent;
  border: none;
  text-decoration: underline;
`;
