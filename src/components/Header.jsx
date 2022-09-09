import React, {useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import ReactSelect from 'react-select';
import logo from '../../public/src/logo.svg'

const Header = ({ curTheme, setTheme, themes }) => {
  const themeList = [];
  for (let theme in themes) {
    themeList.push(
      <option key={theme} value={theme}>
        {theme}
      </option>
    );
  }
  const theme = useContext(ThemeContext);

  const options = [];
  for (let key in themes) {
    options.push({
      value: key,
      label: key,
    })
  }


  return (
    <Container>
      <Title>
        <Logo src={logo}/>
        <H1>Aix-en-Provence</H1>
        <SelectContainer>
          <ReactSelect
            options={options}
            onChange={(e) => setTheme(e.value)}
            styles={selectStyles}
            custTheme={theme}
            placeholder={curTheme}
            isSearchable={false}
            value={curTheme}
          />
        </SelectContainer>
      </Title>
      <SaleAlert>
        SITE-WIDE ANNOUNCEMENT MESSAGE! - SALE / DISCOUNT <strong>OFFER</strong>{' '}
        - <u>NEW PRODUCT HIGHLIGHT</u>
      </SaleAlert>
    </Container>
  );
};

const Logo = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid;
`
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1em;
  width: 100%;
  gap: 1em;
`;
const H1 = styled.h1`
  margin: 0.2em 0;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const SaleAlert = styled.div`
  background-color: ${(props) => props.theme.shadow};
  padding: 0.5em;
  text-align: center;
`;

export default Header;

const SelectContainer = styled.div`
  width: 125px;
  color: ${props => props.theme.color};
  margin-left: auto;
`

const selectStyles = {
  //Horrible
  container: (provided, state) => ({
    ...provided,
    flexGrow: '1',
    borderRadius: 0,
    backgroundColor: state.selectProps.custTheme.shadow,
    color: state.selectProps.custTheme.color,
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    backgroundColor: state.selectProps.custTheme.shadow,
    color: state.selectProps.custTheme.color,
    border: `${state.selectProps.custTheme.color} 1px solid`,
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    backgroundColor: state.selectProps.custTheme.shadow,
    color: state.selectProps.custTheme.color,
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    backgroundColor: state.selectProps.custTheme.shadow,
    color: state.selectProps.custTheme.color,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: state.selectProps.custTheme.color,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.selectProps.custTheme.color,
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: state.selectProps.custTheme.color,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
    },
  }),
};
