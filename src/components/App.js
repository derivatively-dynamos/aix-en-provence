import React, {Component} from 'react';
import './app.scss';
import styled from 'styled-components'

const Button = styled.button`
  border: 2px red dashed;
  color: darkred;
  font-size: 2em;`


class App extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Hello World!</h1>
        <Button>Click me!</Button>
      </div>
    )
  }
}


export default App;