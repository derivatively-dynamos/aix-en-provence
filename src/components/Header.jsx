import React from "react";
import styled from "styled-components";

const Header = ({curTheme, setTheme, themes}) => {

  const themeList = [];
  for (let theme in themes) {
    themeList.push(<option key={theme} value={theme}>{theme}</option>)
  }

  return (
    <Container>
      <h1>Hello World!</h1>
      <select value={curTheme} onChange={(e) => setTheme(e.target.value)}>
        {themeList}
      </select>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

export default Header;