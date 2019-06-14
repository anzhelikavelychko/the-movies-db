import React from 'react';
import { 
  ImageList, 
  ImageListItem, 
  ImageListImage, 
  ImageListSupporting, 
  ImageListLabel,
} from '@rmwc/image-list';
import '@material/image-list/dist/mdc.image-list.css';


const ItemList = ({ list }) => {
  console.log(list); 

  const renderList = () => ( 
    
    <ImageList
      masonry
      withTextProtection
      style={{
        columnCount: 5,
        columnGap: '16px',
        maxWidth: '1000px'
      }}
    >
      {list.map(element => (
        <ImageListItem
          key={element.id}
          style={{ marginBottom: '16px' }}
        >
          <ImageListImage src={"http://image.tmdb.org/t/p/w92/" + element.poster_path} />
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