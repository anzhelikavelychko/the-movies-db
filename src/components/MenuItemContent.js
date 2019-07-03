import React from 'react';
import { Button } from '@rmwc/button';
import ItemsList from './ItemsList';
import ItemDetails from './ItemDetails';
import LoaderHOC from './LoaderHOC';

import './MenuItemContent.css';
import './Loader.css';

class MenuItemContent extends React.Component {
  state = { activePage: 1, sidebar: false };

  async componentDidMount() {
    const { searchText, setLoading } = this.props;
    const { activePage } = this.state;
    if (searchText.length) {
      setLoading(true);
      await this.props.fetchData(searchText, activePage);
    } 
    setLoading(false);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length && !this.props.items.length) {
      this.setState({ activePage: 1 });
    }
  }

  onLoad = async () => {
    const { searchText, setLoading } = this.props;
    const nextPage = this.state.activePage + 1;
    
    this.setState({activePage: nextPage});
    setLoading(true);

    await this.props.fetchData(searchText, nextPage);
    setLoading(false);
  };
  
  renderLoadMoreButton = () => {
    const { totalPages } = this.props;

    return (
      <Button 
        style={{ display: 'flex', justifyContent: 'center', margin: 'auto', border: '2px solid #6200ee'}}
        label="Load more"  
        onClick={this.onLoad}
        disabled={this.state.activePage === totalPages}
      /> 
    )
 };

  onItemSelect = async (item) => {
    this.props.setLoading(true);
    this.props.clearSelectedEpisode();
    await this.props.fetchDetails(item);
    this.setState({ sidebar: true });
    this.props.setLoading(false);
  };

  closeSidebar = () => {
    this.setState({ sidebar: false });
    this.props.clearSelectedEpisode();
  };

 render() {

  const { items, selectedItem, loading } = this.props;
  console.log(loading);

  if (loading) return <div className="loading"></div>
   return (
      <div className="menu_item_content">
        <ItemsList 
          list={items}
          onItemSelect={this.onItemSelect}
          blurred={this.state.sidebar}
        />
        {selectedItem && this.state.sidebar  ? <ItemDetails closeSidebar={this.closeSidebar} /> : null}
        {!items.length ?  null : this.renderLoadMoreButton()}
      </div>
   );
  }
};

export default MenuItemContent;
