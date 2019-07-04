import { connect } from 'react-redux';

import { cleanContent, clearSelectedItem } from '../actions/index';

import SearchField from '../components/SearchField';

const mapDispatchToProps = {
    cleanContent,
    clearSelectedItem
};

export default connect(null, mapDispatchToProps)(SearchField);