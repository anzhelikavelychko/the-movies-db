import React, { useState } from 'react';
import { connect } from 'react-redux';

import { 
  fetchMulti, 
  fetchMovies, 
  fetchTvShows, 
  cleanContent,
  requestMovieDetails,
  requestTvShowDetails,
  clearSelectedItem,
  clearSelectedEpisode
} from '../actions/index';

import SearchField from './SearchField';
import TabBarMenu from './TabBarMenu';
import MenuItemContent from './MenuItemContent';
import './MenuItemContent.css';

const App = ({ 
  contentItems,
  totalPages,
  fetchMulti, 
  fetchMovies, 
  fetchTvShows, 
  cleanContent,
  requestMovieDetails,
  requestTvShowDetails,
  clearSelectedItem,
  selectedItem,
  clearSelectedEpisode,
  isFetching,
  isfetchingDetails
}) => {

  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const onSearchSubmit = (searchText) => {
    if (!searchText) {
      return;
    }

    if (contentItems.length) {
      cleanContent();
    }

    if (activeTab === 0) {
      fetchMulti(searchText);
    } else if (activeTab === 1) {
      fetchMovies(searchText);
    } else if (activeTab === 2) {
      fetchTvShows(searchText);
    }
  };

  const updateActiveTab = (tab) => {
    if (contentItems.length) {
      cleanContent();
      clearSelectedItem();
    }

    setActiveTab(tab);
  };

  const getItemDetails = (item) => {
    if (activeTab === 0) {
      if (item.media_type === 'movie') {
        requestMovieDetails(item.id);
      } else if (item.media_type === 'tv') {
        requestTvShowDetails(item.id);
      }
    } else if (activeTab === 1) {
      requestMovieDetails(item.id);
    } else if (activeTab === 2) {
      requestTvShowDetails(item.id);
    }
  };

  return ( 
    <>
      <SearchField
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearchSubmit={onSearchSubmit}
      />
      { contentItems.length ? <TabBarMenu activeTab={activeTab} setActiveTab={updateActiveTab} /> : null }
      { activeTab === 0 &&
        <MenuItemContent
          fetchData={fetchMulti}
          items={contentItems}
          totalPages={totalPages}
          searchText={inputValue}
          fetchDetails={getItemDetails}
          selectedItem={selectedItem}
          isFetching={isFetching}
          isfetchingDetails={isfetchingDetails}
          clearSelectedEpisode={clearSelectedEpisode}
        /> 
      } 
      { activeTab === 1 &&
        <MenuItemContent
          fetchData={fetchMovies}
          items={contentItems}
          totalPages={totalPages}
          searchText={inputValue}
          fetchDetails={getItemDetails}
          selectedItem={selectedItem}
          isFetching={isFetching}
          isfetchingDetails={isfetchingDetails}
          clearSelectedEpisode={clearSelectedEpisode}
        /> 
      }
        { activeTab === 2 &&
          <MenuItemContent 
            fetchData={fetchTvShows}
            items={contentItems}
            totalPages={totalPages}
            searchText={inputValue}
            fetchDetails={getItemDetails}
            selectedItem={selectedItem}
            isFetching={isFetching}
            isfetchingDetails={isfetchingDetails}
            clearSelectedEpisode={clearSelectedEpisode}
          /> 
        }
      </>
  );
};

const mapStateToProps = (state) => ({
  contentItems: state.contentItems.data.contentItems,
  totalPages: state.contentItems.data.totalPages,
  selectedItem: state.selectedItem.data,
  isFetching: state.contentItems.isFetching,
  isfetchingDetails: state.selectedItem.isfetchingDetails
})

export default connect(
  mapStateToProps, 
  { 
    fetchMulti, 
    fetchMovies, 
    fetchTvShows, 
    cleanContent,
    requestMovieDetails,
    requestTvShowDetails,
    clearSelectedItem,
    clearSelectedEpisode 
  })(App);
