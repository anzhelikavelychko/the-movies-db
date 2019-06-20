import React from 'react';

import { Button } from '@rmwc/button';
import { CircularProgress } from '@rmwc/circular-progress';

import ItemsList from './ItemsList';
import ItemDetails from './ItemDetails';


class MenuItemContent extends React.Component {
  state = { activePage: 1 };

  componentDidMount() {
    const { searchText } = this.props;
    if (searchText.length) {
      this.props.fetchData(searchText);
    } 
  }

  componentWillUnmount () {
    this.props.clearDataFromStore();
    this.props.clearSelectedItem();
    this.setState({activePage: 1});
  }

  onLoad = () => {
    const { searchText } = this.props;
    const nextPage = this.state.activePage + 1;
    
    this.setState({activePage: nextPage});

    this.props.fetchData(searchText, nextPage);
  };
  
  renderLoadMoreButton = () => {
    const { data } = this.props;

    return (
      <Button 
        label="Load more" 
        icon={<CircularProgress />} 
        onClick={this.onLoad}
        disabled={this.state.activePage === data.totalPages}
      /> 
    )
 };

  onItemSelect = (id) => {
    this.props.getItemDetails(id);
  };

 render() {
   const { data } = this.props;
   
   return (
    <div>
      <ItemDetails/>
      <ItemsList list={data.searchedItems} onItemSelect={this.onItemSelect} />
      { !data.searchedItems.length ?  null : this.renderLoadMoreButton() }
    </div>
  );
 }
};

export default MenuItemContent;
