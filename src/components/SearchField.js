import React from 'react';
import { connect } from 'react-redux';

import { cleanContent, clearSelectedItem } from '../actions/index';

import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button'
import '@material/textfield/dist/mdc.textfield.css';
import '@material/button/dist/mdc.button.css';
import './MenuItemContent.css';


const SearchField = ({ 
  inputValue, 
  setInputValue, 
  onSearchSubmit, 
  cleanContent, 
  clearSelectedItem 
}) => {

  const onInputChange =  (event) => {
    setInputValue(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    onSearchSubmit(inputValue);
  };

  const clearSearchField = () => {
    cleanContent();
    clearSelectedItem();
    setInputValue('');
  };

  return(
    <div className="text_field">
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

export default connect(null, { cleanContent, clearSelectedItem })(SearchField);