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

import App from '../components/App';

const mapStateToProps = (state) => ({
    contentItems: state.contentItems.data.contentItems,
    totalPages: state.contentItems.data.totalPages,
    selectedItem: state.selectedItem.data,
    isFetching: state.contentItems.isFetching,
    isfetchingDetails: state.selectedItem.isfetchingDetails
});

const mapDispatchToProps = {
    fetchMulti,
    fetchMovies,
    fetchTvShows,
    cleanContent,
    requestMovieDetails,
    requestTvShowDetails,
    clearSelectedItem,
    clearSelectedEpisode
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
