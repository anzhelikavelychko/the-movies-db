import React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button'
import '@material/textfield/dist/mdc.textfield.css';
import '@material/button/dist/mdc.button.css';

import { clearDataFromStore } from '../actions/index';


const SearchField = ({ inputValue, setInputValue, onSearchSubmit, clearDataFromStore }) => {

  const onInputChange =  (event) => {
    setInputValue(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    onSearchSubmit(inputValue);
  };

  const clearSearchField = () => {
    clearDataFromStore();
    setInputValue('');

  };

  return(
    <div>
      <form onSubmit={onFormSubmit}>
        <TextField 
          icon="search" 
          trailingIcon={{
            icon: 'close',
            tabIndex: 0,
            onClick: clearSearchField
          }}
          label="Search..."
          value = {inputValue}
          onChange = {onInputChange}
        /> 
        <Button type= "submit" label="Submit" raised />
      </form>
    </div>

  );
};

export default connect(null, { clearDataFromStore })(SearchField);