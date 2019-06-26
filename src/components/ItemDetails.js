import React from 'react';
import { connect } from 'react-redux';


import { Typography } from '@rmwc/typography'
import {
  Card, 
  CardMedia,
  CardPrimaryAction,
} from '@rmwc/card';
import '@material/typography/dist/mdc.typography.css';
import '@material/card/dist/mdc.card.css';

const ItemDetails = ({ item }) => {
  console.log(item);
  if (!item) {
    return <div>Loading ....</div>
  }
  
  return(
    <Card style={{ width: '21rem' }}>
      <CardPrimaryAction>
        <CardMedia
          sixteenByNine
          image={'http://image.tmdb.org/t/p/w185' + item.poster_path} 
        />
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
            <Typography use="headline6" tag="h2">
              {item.title}
            </Typography>
            <Typography
              use="subtitle2"
              tag="h3"
              theme="textSecondaryOnBackground"
              style={{ marginTop: '-1rem' }}
            >
              by Kurt Wagner
            </Typography>
            <Typography
              use="body1"
              tag="div"
              theme="textSecondaryOnBackground"
            >
             {item.overview}
            </Typography>
          </div>
        </CardPrimaryAction>
      </Card> 
    );
};

const mapStateToProps = (state) => {
  return {
    item: state.selectedItem
  }
}; 

export default connect(mapStateToProps, null)(ItemDetails);