import React from 'react';
import { Button } from '@rmwc/button';
import ItemsList from '../ItemsList/ItemsList';
import ItemDetails from '../../containers/ItemDetails';
import './index.css';
import '../Loader.css';

class MenuItemContent extends React.Component {
  state = { activePage: 1, sidebar: false };

  componentDidMount() {
    const { searchText } = this.props;
    const { activePage } = this.state;
    if (searchText.length) {
      this.props.fetchData(searchText, activePage);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length && !this.props.items.length) {
      this.setState({ activePage: 1 });
    }
  }

  onLoad = () => {
    const { searchText } = this.props;
    const { sidebar } = this.state;

    const nextPage = this.state.activePage + 1;

    if (sidebar) {
      return this.closeSidebar();
    }

    this.setState({ activePage: nextPage });
    this.props.fetchData(searchText, nextPage);
  };

  renderLoadMoreButton = () => {
    const { totalPages } = this.props;

    return (
      <Button
        style={{ display: 'flex', justifyContent: 'center', margin: 'auto', border: '2px solid #6200ee' }}
        label="Load more"
        onClick={this.onLoad}
        disabled={this.state.activePage === totalPages}
      />
    )
  };

  onItemSelect = (item) => {
    const { sidebar } = this.state;

    if (sidebar) {
      return this.closeSidebar();
    }

    this.props.clearSelectedEpisode();
    this.props.fetchDetails(item);
    this.setState({ sidebar: true });
  };

  closeSidebar = () => {
    this.setState({ sidebar: false });
    this.props.clearSelectedEpisode();
  };

  render() {

    const { items, selectedItem, isFetching, isfetchingDetails } = this.props;

    /*if (isFetching || isfetchingDetails) { 
      return <div className="loading"></div>;
    }*/

    return (
      <div className="menu_item_container">
        <div className="menu_item_content">
          {isFetching || isfetchingDetails ? <div className="loading"></div> : null}
          <ItemsList
            list={items}
            onItemSelect={this.onItemSelect}
            blurred={this.state.sidebar}
            isFetching={isFetching}
            isfetchingDetails={isfetchingDetails}
          />
          {selectedItem && this.state.sidebar ? <ItemDetails closeSidebar={this.closeSidebar} /> : null}
        </div>
        {!items.length ? null : this.renderLoadMoreButton()}
      </div>
    );
  }
};

export default MenuItemContent;
