import React from 'react';
import { 
  ImageList, 
  ImageListItem, 
  ImageListImage, 
  ImageListSupporting, 
  ImageListLabel,
  ImageListImageAspectContainer 
} from '@rmwc/image-list';
import '@material/image-list/dist/mdc.image-list.css';


const ItemList = ({ list }) => {

  const renderList = () => ( 
    
    <ImageList>
      {list.map(element => (
        <ImageListItem
          key={element.id}
          style={{ margin: '5px', width: 'calc(100% / 6 - 5px)' }}
        >
          <ImageListImageAspectContainer
            style={{ paddingBottom: 'calc(100% / 0.8)' }}
          >
            <ImageListImage src={"http://image.tmdb.org/t/p/w185/" + element.poster_path} />
          </ImageListImageAspectContainer>
          <ImageListSupporting>
            <ImageListLabel>{element.title}</ImageListLabel>
          </ImageListSupporting>
        </ImageListItem>
        ))}
      </ImageList>
  );

  return ( 
    <div>
      {renderList()}
    </div>
  );
};

export default ItemList;