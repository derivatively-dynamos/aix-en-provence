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
        {answers.map((answer, index) => {
          if (!loadMore && index < 2) {
            return <AnswersField key={answer.id} answer={answer} />;
          } else if (loadMore) {
            return <AnswersField key={answer.id} answer={answer} />;
          }
        })}
        {answers.length > 2 && (
          <div>
            <Button onClick={handleClick}>
              {" "}
              {loadMore ? "Collapse" : "Load More Answers"}
            </Button>
          </div>
        )}
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

const Button = styled.button`
  display: flex;
  margin-left: 20px;
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;
