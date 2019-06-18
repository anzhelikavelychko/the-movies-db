import React, { useState } from 'react';
import { connect } from 'react-redux';

import ItemList from './ItemList';
import LoadMoreButton from './LoadMoreButton';


const MenuItemContent = ({ data, fetchData }) => {
  return (
    <div>
      <ItemList list={data}/>
      <LoadMoreButton /> 
    </div>

  );
};

export default MenuItemContent;
