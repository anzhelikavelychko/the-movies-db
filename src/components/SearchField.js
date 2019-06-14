import React, { useState } from 'react';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button'
import '@material/textfield/dist/mdc.textfield.css';
import '@material/button/dist/mdc.button.css';


const SearchField = ({ onSearchSubmit }) => {

  const [ inputValue, setInputValue ] =  useState('');

  const onInputChange =  (event) => {
    setInputValue(event.target.value);
  };
  const onFormSubmit = event => {
    event.preventDefault();
    onSearchSubmit(inputValue);
  };

  return(
    <div>
      <form onSubmit={onFormSubmit}>
        <TextField 
          icon="search" 
          trailingIcon="close" 
          label="Search..."
          value = {inputValue}
          onChange = {onInputChange}
        /> 
        <Button type= "submit" label="Submit" raised />
      </form>
    </div>

  );
};

export default SearchField;