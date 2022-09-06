import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AddButtonComponent from "../shared-components/AddButtonComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from '../shared-components/Rating';

const ModalButton = ({
    onClick,
    isOpen,
    onSubmit
  }) => {


  return (
    <AddButtonComponent
      name={
        <>
          ADD REVIEW
          <PlusIcon icon={faPlus}></PlusIcon>
        </>
      }
      onClick={onClick}
      isOpen={isOpen}
      showHeader={true}
      title={'Write Your Review'}
      styled={false}>
      <form onSubmit={onSubmit}>
          <input
            maxLength="60"
            placeholder="Username..."
            type="text"
          /><br></br>
          <input
            maxLength="60"
            placeholder="E-mail..."
            type="text"
          /><br></br>
          <input
            maxLength="60"
            placeholder="Your review's awesome title..."
            type="text"
            /><br></br>
          <div>I recommend this product</div>
          <input type="radio" id="Yes" value="Yes"></input>
          <label for="Yes">Yes</label>
          <input type="radio" id="No" value="No"></input>
          <label for="No">No</label><br></br>
          <textarea
            maxLength="1000"
            rows="6"
            cols="50"
            placeholder="I thought this product was..."
          ></textarea><br></br>
          <button>Submit</button>
      </form>
    </AddButtonComponent>
  )
}

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export default ModalButton;