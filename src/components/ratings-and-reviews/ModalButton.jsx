import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AddButtonComponent from "../shared-components/AddButtonComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from '../shared-components/Rating';

const ModalButton = ({onClick, isOpen}) => {


  return (
    <AddButtonComponent
      name={
        <>ADD REVIEW
        <PlusIcon icon={faPlus}></PlusIcon>
        </>
      }
      onClick={onClick}
      isOpen={isOpen}
      showHeader={true}
      title={'Write Your Review'}
      styled={false}>
      <form>
        <input type="radio" id="Yes" value="Yes"></input>
        <label for="Yes">Yes</label>

        <input type="radio" id="No" value="No"></input>
        <label for="No">No</label>
        <br></br>

        <label for="e-mail">E-Mail</label>
        <input id="e-mail" type="text"></input>



      </form>
    </AddButtonComponent>
  )
}

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
`

export default ModalButton;