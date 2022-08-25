import React from "react";
import styled from "styled-components";
import ThumbnailList from "./ThumbnailList";

const DefaultView = ({photos}) => (
  <Container>
    <MainImage src={photos[0].url}/>
    <ThumbnailList photos={photos}/>
    <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, fugit quasi. Ex itaque nam ad saepe, quis omnis, corrupti repellendus, quae minima labore repellat nisi molestias magnam dignissimos nobis. Voluptas.</P>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`
const MainImage = styled.img`
  border: 2px solid cyan;
  flex: 1;
  max-height: 500px;
`
const P = styled.p`

`

export default DefaultView;