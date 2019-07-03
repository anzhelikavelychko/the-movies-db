import React from 'react';
import { ImageList } from '@rmwc/image-list';
import '@material/image-list/dist/mdc.image-list.css';
import ItemComponent from './ItemComponent';
import './ItemsList.css';

const ItemList = ({ list, onItemSelect, blurred }) => {
  return ( 
    <div className={blurred ? "blurred" : ""}>
      <ImageList>
        {list.map(item => <ItemComponent key={item.id} item={item} onItemSelect={onItemSelect} /> )}
      </ImageList>
    </div>
  );
};

export default ItemList;