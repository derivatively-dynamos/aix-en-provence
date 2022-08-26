import React from "react";
import styled from "styled-components";
import ThumbnailList from "./ThumbnailList";

const DefaultView = () => (
  <Container>
    <MainImage src="https://via.placeholder.com/300" />
    <ThumbnailList />
    <P>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem,
      fugit quasi. Ex itaque nam ad saepe, quis omnis, corrupti repellendus,
      quae minima labore repellat nisi molestias magnam dignissimos nobis.
      Voluptas.
    </P>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;
const MainImage = styled.img`
  border: 2px solid cyan;
  flex: 1;
`;
const P = styled.p``;

export default DefaultView;
