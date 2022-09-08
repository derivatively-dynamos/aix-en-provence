import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AddButtonComponent from "../shared-components/AddButtonComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ScoreSelect from './ScoreSelect';
import api from '../shared-components/api';
import StarRadio from './CharacteristicSelect.jsx'

const ModalButton = ({
    onClick,
    isOpen,
    setIsOpen
  }) => {
  const [userReview, setUserReview] = useState({
    body: '',
    date: '',
    helpfulness: 0,
    photos: [],
    rating: 1,
    recommend: false,
    response: null,
    reviewer_name: '',
    summary: '',
    characteristics: {
      Size: 0,
      Fit: 0,
      Length: 0,
      Comfort: 0,
      Quality: 0
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setUserReview((prevState) => ({
      ...prevState,
      date: new Date(),
    }))
    api.post('/reviews', userReview)
    .then(setIsOpen(false))
    .catch((err) => console.log(err))
  }

  const handleOnChange = (e) => {
    setUserReview((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }

  const handleRadioClick = (radio, value) => {
    switch (value) {
    case 'Yes':
      setUserReview((prevState) => ({
        ...prevState,
        [radio]: true
      }))
      break;
    case 'No':
      setUserReview((prevState) => ({
        ...prevState,
        [radio]: false
      }))
      break;
    case 1:
      setUserReview((prevState) => ({
        ...prevState,
        characteristics: {
          ...prevState.characteristics,
          [radio]: 1
        }
      }))
      break;
    case 2:
      setUserReview((prevState) => ({
        ...prevState,
        characteristics: {
          ...prevState.characteristics,
          [radio]: 2
        }
      }))
      break;
    case 3:
      setUserReview((prevState) => ({
        ...prevState,
        characteristics: {
          ...prevState.characteristics,
          [radio]: 3
        }
      }))
      break;
    case 4:
      setUserReview((prevState) => ({
        ...prevState,
        characteristics: {
          ...prevState.characteristics,
          [radio]: 4
        }
      }))
      break;
    case 5:
      setUserReview((prevState) => ({
        ...prevState,
        characteristics: {
          ...prevState.characteristics,
          [radio]: 5
        }
      }))
      break;
    }
  }

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
      <Form onSubmit={onSubmit}>
        <ScoreCont>
          <ScoreSelect
            userReview={userReview}
            setUserReview={setUserReview}
          />
        </ScoreCont>
          <Input
            id="email"
            maxLength="60"
            placeholder="E-Mail..."
            type="text"
            onChange={(e) => handleOnChange(e)}
          />
          <Input
            id="reviewer_name"
            maxLength="60"
            placeholder="Username..."
            type="text"
            onChange={(e) => handleOnChange(e)}
          />
          <Input
            id="summary"
            maxLength="60"
            placeholder="Your review's awesome title..."
            type="text"
            onChange={(e) => handleOnChange(e)}
            />
          <Recommendation>
            <div>I recommend this product</div>
            <Input
              type="radio"
              name="recommended"
              onClick={() => handleRadioClick('recommend', 'Yes')}
            />
            <label htmlFor="recommend">Yes</label>
            <Input
              type="radio"
              name="recommended"
              onClick={() => handleRadioClick('recommend', 'No')}
            />
            <label htmlFor="recommend">No</label>
          </Recommendation>
          {Object.keys(userReview.characteristics).map((char) => {
            return <StarRadio
              key={char}
              name={char}
              chararacteristic={char}
              handleRadioClick={handleRadioClick}
            />
          })}
          <textarea
            id="body"
            maxLength="1000"
            rows="6"
            cols="50"
            placeholder="I thought this product was..."
            onChange={(e) => handleOnChange(e)}
          ></textarea>
          <button>Submit</button>
      </Form>
    </AddButtonComponent>
  )
}

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
`
const Input = styled.input`
  margin: 0.25em;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5em;
`
const Recommendation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: baseline;
`
const ScoreCont = styled.div`
  margin-bottom: 0.25em;
`
export default ModalButton;