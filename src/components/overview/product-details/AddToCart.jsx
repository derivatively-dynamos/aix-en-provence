import React from "react";
import styled from "styled-components";

const AddToCart = () => (
  <div>
    <div>
      <Button>SELECT SIZE v</Button>
      <Button>1  v</Button>
    </div>
    <div>
      <Button>ADD TO BAG   +</Button>
      <Button>☆</Button>
    </div>
  </div>
)

const Button = styled.button`
  border-radius: 0;
  border: 1px solid darkgray;
  background-color: #292929;
  color: #c0c0c0;
  font-size: 14px;
  padding: 10px;
  margin-right: 10px;
  margin-top: 5px;
`

export default AddToCart;