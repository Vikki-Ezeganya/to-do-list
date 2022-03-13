import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [inputIsValid, setInputIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length > 0) setInputIsValid(!inputIsValid);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setInputIsValid(false);
      return;
    } 
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!inputIsValid && 'invalid'}`}>
        <label style={{color: !inputIsValid && 'red'} }>Course Goal</label>
        <input
        //  style={{background: !inputIsValid ? 'gainsboro': 'transparent', border: !inputIsValid ? '1px solid red': '1px solid black' }}
         type="text" 
         onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
