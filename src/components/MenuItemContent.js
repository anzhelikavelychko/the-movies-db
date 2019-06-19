import React from 'react';

import ItemList from './ItemList';

import { Button } from '@rmwc/button';
import { CircularProgress } from '@rmwc/circular-progress';


class MenuItemContent extends React.Component {
  state = {activePage: 1 };

  componentDidMount() {
    const { searchText } = this.props;
    if (searchText.length) {
      this.props.fetchData(searchText);
    } 
  }

  componentWillUnmount () {
    this.props.clearDataFromStore();
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

 render() {
  const { data } = this.props;
  console.log('totalPage', data.totalPages);

  return (
    <div>
      <ItemList list={data.searchedItems}/>
      { !data.searchedItems.length ?  null : this.renderLoadMoreButton() }
    </div>
  );
 }
};

export default MenuItemContent;
