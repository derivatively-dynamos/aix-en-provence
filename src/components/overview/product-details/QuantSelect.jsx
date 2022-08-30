import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';
import ReactSelect from 'react-select';

const QuantSelect = ({ quant, setQuant, maxQuant, sku, quantRef, ...props }) => {

  const theme = useContext(ThemeContext);
  console.log(theme);
  const [inStock, setInStock] = useState(true);

  useEffect(() => {
    setInStock(sku === null || maxQuant !== 0);
  }, [maxQuant, sku]);

  const options = [
    {
      value: 0,
      label: 'Quantity',
    },
  ];
  for (let i = 1; i <= maxQuant && i <= 15; i++) {
    options.push({
      value: i,
      label: i,
    });
  }

  return (
    <Container>
      {inStock ? (
        <ReactSelect
          options={options}
          ref={quantRef}
          openMenuOnFocus={true}
          onChange={(e) => setQuant(e.value)}
          value={options[quant]}
          styles={selectStyles}
          custTheme={theme}
        />
      ) : (
        <OutOfStock>OUT OF STOCK</OutOfStock>
      )}
    </Container>
  );
};


export default QuantSelect;

const Container = styled.div`
  align-self: flex-start;
  flex-basis: 50%;
  display: flex;
`;
const OldSelect = styled(ReactSelect)`
  border-radius: 0;
  border: 1px solid;
  background-color: ${(props) => props.theme.shadow};
  color: ${(props) => props.theme.color};
  font-size: 14px;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;
const OutOfStock = styled.div`
  border-radius: 0;
  border: 1px solid;
  background-color: ${(props) => props.theme.shadow};
  font-size: 14px;
  padding: 10px;
`;
const selectStyles = { //Horrible
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
  singleValue: (provided, state) => ({
    ...provided,
    color: state.selectProps.custTheme.color,
  })
}