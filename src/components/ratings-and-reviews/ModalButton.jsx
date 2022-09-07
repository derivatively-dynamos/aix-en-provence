import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import AddButtonComponent from "../shared-components/AddButtonComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ScoreSelect from './ScoreSelect';
import api from '../shared-components/api';

const ModalButton = ({
    onClick,
    isOpen,
    setIsOpen
  }) => {
  const [userReview, setUserReview] = useState({
    body: '',
    date: '',
    helpfulness: 1,
    photos: [],
    rating: 1,
    recommend: false,
    response: null,
    review_id: 1,
    reviewer_name: '',
    summary: ''
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

  const handleRecommendClick = (e) => {
    e.target.value === "Yes"
    ? setUserReview((prevState) => ({
        ...prevState,
        recommend: true
      }))
    : setUserReview((prevState) => ({
      ...prevState,
      recommend: false
    }));
  }

  const handleScoreClick = (e) => {

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
          <ScoreSelect
            userReview={userReview}
            setUserReview={setUserReview}
          /><br></br>
          <input
            id="reviewer_name"
            maxLength="60"
            placeholder="Username..."
            type="text"
            onChange={(e) => handleOnChange(e)}
          /><br></br>
          <input
            id="summary"
            maxLength="60"
            placeholder="Your review's awesome title..."
            type="text"
            onChange={(e) => handleOnChange(e)}
            /><br></br>
          <Recommendation>
            <div>I recommend this product</div>
            <input
              type="radio"
              name="recommended"
              value="Yes"
              onClick={(e) => handleRecommendClick(e)}
            />
            <div>Yes</div>
            <input
              type="radio"
              name="recommended"
              value="No"
              onClick={(e) => handleRecommendClick(e)}
            />
            <div>No</div>
          <div>| How many ⭐</div>
            <select id="rating" onClick={(e) => handleOnChange(e)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </Recommendation><br></br>
          <textarea
            id="body"
            maxLength="1000"
            rows="6"
            cols="50"
            placeholder="I thought this product was..."
            onChange={(e) => handleOnChange(e)}
          ></textarea><br></br>
          <button>Submit</button>
      </Form>
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
const Recommendation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
`
export default ModalButton;