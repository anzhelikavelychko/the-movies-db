import React from 'react';
import { ImageList } from '@rmwc/image-list';
import '@material/image-list/dist/mdc.image-list.css';

import ItemComponent from './ItemComponent';


const ItemList = ({ list, onItemSelect }) => {

  const renderList = () => ( 
    <ImageList>
      {list.map(item => <ItemComponent key={item.id} item={item} onItemSelect={onItemSelect} /> )
      }
      </ImageList>
  );

  return ( 
    <div>
      {renderList()}
    </div>
  );
};

export default ItemList;