import { connect } from 'react-redux';
import ItemDetails from '../components/ItemsList/ItemDetails';

const mapStateToProps = (state) => {
    return {
      item: state.selectedItem.data,
    }
  };
  
  export default connect(mapStateToProps, null)(ItemDetails);