import React from "react";
import styled from "styled-components";

const Header = ({curTheme, setTheme, themes}) => {

  const themeList = [];
  for (let theme in themes) {
    themeList.push(<option key={theme} value={theme}>{theme}</option>)
  }

  return (
    <Container>
      <Title>
        <H1>FEC</H1>
        <select value={curTheme} onChange={(e) => setTheme(e.target.value)}>
          {themeList}
        </select>
      </Title>
      <SaleAlert>
        SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE / DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u>
      </SaleAlert>
    </Container>
  )
}

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  width: 100%;
`
const H1 = styled.h1`
  margin: .5em 0 ;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
`
const SaleAlert = styled.div`
  background-color: ${props => props.theme.shadow};
  padding:  .5em;
  text-align: center;
`

export default Header;