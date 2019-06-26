import React from 'react';

import { Button } from '@rmwc/button';

import ItemsList from './ItemsList';
import ItemDetails from './ItemDetails';


class MenuItemContent extends React.Component {
  state = { activePage: 1 };

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
    const nextPage = this.state.activePage + 1;
    
    this.setState({activePage: nextPage});

    this.props.fetchData(searchText, nextPage);
  };
  
  renderLoadMoreButton = () => {
    const { totalPages } = this.props;

    return (
      <Button 
        label="Load more"  
        onClick={this.onLoad}
        disabled={this.state.activePage === totalPages}
      /> 
    )
 };

  onItemSelect = (item) => {
    this.props.fetchDetails(item);
  };

 render() {
   const { items } = this.props;
   
   return (
    <div>
      <ItemDetails />
      <ItemsList list={items} onItemSelect={this.onItemSelect} />
      { !items.length ?  null : this.renderLoadMoreButton() }
    </div>
  );
 }
};

export default MenuItemContent;
