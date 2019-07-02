import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  fetchMulti, 
  fetchMovies, 
  fetchTvShows, 
  cleanContent,
  requestMovieDetails,
  requestTvShowDetails,
  clearSelectedItem,
  setLoading
} from '../actions/index';

import SearchField from './SearchField';
import TabBarMenu from './TabBarMenu';
import MenuItemContent from './MenuItemContent';



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
  setLoading,
  loading
}) => {

  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const onSearchSubmit = async (searchText) => {
    if (!searchText) {
      return;
    }

    if (contentItems.length) {
      cleanContent();
    }

    setLoading(true);
    if (activeTab === 0) {
      await fetchMulti(searchText);
    } else if (activeTab === 1) {
      await fetchMovies(searchText);
    } else if (activeTab === 2) {
      await fetchTvShows(searchText);
    }
    setLoading(false);
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
          loading={loading}
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
          loading={loading}
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
          loading={loading}
        /> 
      }
    </>
  );
};

const mapStateToProps = (state) => {
  const { contentItems, totalPages } = state.contentItems.data;
  const { loading } = state.contentItems;
  return {
    contentItems,
    totalPages,
    selectedItem: state.selectedItem,
    loading
  }
}

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
    setLoading 
  })(App);
