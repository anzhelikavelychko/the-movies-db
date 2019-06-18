import React, { useState, useEffect } from 'react';

import ItemList from './ItemList';

import { Button } from '@rmwc/button';
import { CircularProgress } from '@rmwc/circular-progress';


const MenuItemContent = ({ data, fetchData, searchText }) => {
  console.log('data.searchedItems.length', data.searchedItems.length);

  const [activePage, setActivePage] = useState(1);

  const onLoad = () => {

    setActivePage(activePage+1);
    console.log('activePage in COMPONENT', activePage);

    fetchData(searchText, activePage);
  };

  useEffect(() => {
    fetchData(searchText, activePage);
  }, [activePage]);

 const renderLoadMoreButton = () => {
   if(activePage !== data.totalPages) {
     return (
      <Button 
        label="Load more" 
        icon={<CircularProgress />} 
        onClick={onLoad}
      />
     )
    } else {
     return (
      <Button 
        label="Load more" 
        icon={<CircularProgress />} 
        onClick={onLoad}
        disabled
      /> 
     )
    }
 };

  return (
    <div>
      <ItemList list={data.searchedItems}/>
      { !data.searchedItems.length ?  null : renderLoadMoreButton() }
    </div>

  );
};

export default MenuItemContent;
