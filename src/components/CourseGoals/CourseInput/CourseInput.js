import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from'./CourseInput.module.css';

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
      <div className={`${styles['form-control']} ${!inputIsValid && styles.invalid}`}>
        <label style={{color: !inputIsValid && 'red'} }>Course Goal</label>
        <input
         type="text" 
         onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
