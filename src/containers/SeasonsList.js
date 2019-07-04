import { connect } from 'react-redux';

import { fetchEpisodes, clearSelectedEpisode } from '../actions/index';

import SeasonsList from '../components/TVSeasonsContent/SeasonsList';

const mapStateToProps = (state) => {
    return {
        episodes: state.contentItems.episodes
    }
};

const mapDispatchToProps = { fetchEpisodes, clearSelectedEpisode };

export default connect(mapStateToProps, mapDispatchToProps)(SeasonsList);
