import React from 'react';

import { 
    ImageListItem, 
    ImageListImage, 
    ImageListSupporting, 
    ImageListLabel,
    ImageListImageAspectContainer 
  } from '@rmwc/image-list';
  import '@material/image-list/dist/mdc.image-list.css';

const ItemComponent = ({ item, onItemSelect }) => {
    return (
        <ImageListItem
          style={{ margin: '5px', width: 'calc(100% / 6 - 5px)' }}
          onClick={ () => onItemSelect(item)}
        >
          <ImageListImageAspectContainer
            style={{ paddingBottom: 'calc(100% / 0.8)' }}
          >
            {(item.poster_path === null || item.poster_path === undefined) ? 
              <ImageListImage alt= {item.title}/> :
              <ImageListImage src={"http://image.tmdb.org/t/p/w185/" + item.poster_path} /> 
            }
          </ImageListImageAspectContainer>
          <ImageListSupporting>
            <ImageListLabel>{item.title}</ImageListLabel>
          </ImageListSupporting>
        </ImageListItem>
    );

};

export default ItemComponent;