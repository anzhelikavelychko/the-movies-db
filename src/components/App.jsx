import React from 'react';
import SearchField from '../containers/SearchField';
import TabBarMenu from './TabBarMenu';
import MenuItemContent from './MenuItemContent';
import './MenuItemContent/index.css';

export default class App extends React.Component {
  state = {
    activeTab: 0,
    inputValue: ''
  }

  onSearchSubmit = (searchText) => {
    const { activeTab } = this.state;
    const { contentItems, cleanContent, fetchMulti, fetchMovies, fetchTvShows } = this.props;
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

  changeInputValue = (value) => {
    this.setState({ inputValue: value });
  };

  updateActiveTab = (tab) => {
    const { contentItems, cleanContent, clearSelectedItem } = this.props;
    if (contentItems.length) {
      cleanContent();
      clearSelectedItem();
    }

    this.setState({ activeTab: tab });
  };

  getItemDetails = (item) => {
    const { requestMovieDetails, requestTvShowDetails } = this.props;
    const { activeTab } = this.state;
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

  render() {
    const { activeTab, inputValue } = this.state;
    const { contentItems, totalPages, selectedItem, isFetching, isfetchingDetails } = this.props;
    const { fetchMulti, fetchMovies, fetchTvShows, clearSelectedEpisode } = this.props;
    return (
      <>
        <SearchField
          inputValue={inputValue}
          setInputValue={this.changeInputValue}
          onSearchSubmit={this.onSearchSubmit}
        />
        {contentItems.length ? <TabBarMenu activeTab={activeTab} setActiveTab={this.updateActiveTab} /> : null}
        {
          activeTab === 0 &&
          <MenuItemContent
            fetchData={fetchMulti}
            items={contentItems}
            totalPages={totalPages}
            searchText={inputValue}
            fetchDetails={this.getItemDetails}
            selectedItem={selectedItem}
            isFetching={isFetching}
            isfetchingDetails={isfetchingDetails}
            clearSelectedEpisode={clearSelectedEpisode}
          />
        }
        {
          activeTab === 1 &&
          <MenuItemContent
            fetchData={fetchMovies}
            items={contentItems}
            totalPages={totalPages}
            searchText={inputValue}
            fetchDetails={this.getItemDetails}
            selectedItem={selectedItem}
            isFetching={isFetching}
            isfetchingDetails={isfetchingDetails}
            clearSelectedEpisode={clearSelectedEpisode}
          />
        }
        {
          activeTab === 2 &&
          <MenuItemContent
            fetchData={fetchTvShows}
            items={contentItems}
            totalPages={totalPages}
            searchText={inputValue}
            fetchDetails={this.getItemDetails}
            selectedItem={selectedItem}
            isFetching={isFetching}
            isfetchingDetails={isfetchingDetails}
            clearSelectedEpisode={clearSelectedEpisode}
          />
        }
      </>

    );
  }

};
