import React from 'react';
import { connect } from 'react-redux';

import { ImageListImage } from '@rmwc/image-list';
import '@material/typography/dist/mdc.typography.css';

import './ItemDetails.css';

const ItemDetails = ({ item, closeSidebar }) => {
  const itemGenres = item.genres.map( genre => (
    <li key={genre.id}>{genre.name}</li>
  ));

  const productionCompanies = item.production_companies.map( company => (
    <li key={company.id}>{company.name}</li>
  ));

  return(
    <div className="item_details">
        <ImageListImage 
          src={"http://image.tmdb.org/t/p/w185/" + item.poster_path} 
          style={{ margin: '2px', width: 'calc(100% / 5 - 4.2px)' }}
        />
        <a href="#" className="close" onClick={closeSidebar}></a>
        <div className="item_title" style={{ padding: '0 1rem 1rem 1rem' }}>
          <h2>
            {item.title}
          </h2>
        </div>
        <div className="rating">
          <p>{item.popularity}</p>
        </div>
        <div className="genres">
          <ul>Genres: {itemGenres}</ul>
          <p>{item.release_date}</p>
        </div>
        { item.production_companies.length ? (
          <div className="production_companies">
            <ul>{productionCompanies.length > 1 ? <p>Production Companies :</p> : <p>Production Company :</p> } 
              {productionCompanies}
            </ul> 
          </div> ) : null 
        }
         { item.networks ? (
          <div className="networks">
            <ul>{item.networks.length > 1 ? <p>Networks:</p> : <p>Network:</p> } 
              {item.networks.map( network => (
                <li key={network.id}>{network.name}</li>
              ))}
            </ul> 
          </div> ) : null 
        }
        <div className="links">
          { item.homepage && <a href={item.homepage}>Homepage</a> }
          {item.imdb_id && <a href={`https://www.imdb.com/title/${item.imdb_id}`}>IMDB</a>}
        </div>
        <div className="overview">
          <p>{item.overview}</p>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.selectedItem,
  }
}; 

export default connect(mapStateToProps, null)(ItemDetails);