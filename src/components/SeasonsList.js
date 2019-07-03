import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEpisodes, clearSelectedEpisode } from '../actions/index';
import SeasonComponent from './SeasonComponent';
import EpisodeComponent from './EpisodeComponent';

import './SeasonsList.css';

const SeasonsList = ({ 
    tvId, 
    seasons, 
    fetchEpisodes, 
    episodes,
    clearSelectedEpisode 
}) => {
    const [selectedEpisode, setSelectedEpisode] = useState(null);

    const onSeasonClick = async (number) => {
        setSelectedEpisode(null);
        await clearSelectedEpisode();
        fetchEpisodes(tvId, number);
    };

    const renderList = seasons.map((season) => 
        <SeasonComponent 
            key={ season.id} 
            season={season} 
            onSeasonClick={onSeasonClick}
        />
    );

    const onSelectEpisode = (id) => {
       const selected = episodes.find( episode => episode.id === id);
       setSelectedEpisode(selected);
    };

    return (
        <>
            <div className="seasons_list">{renderList}</div>
            {episodes.length ? <EpisodeComponent data={episodes} onSelectEpisode={onSelectEpisode}/> : null }
            {selectedEpisode ? (
                <div className="selected_episode">
                    <h3>{selectedEpisode.name}</h3>
                    <p>{selectedEpisode.overview}</p>
                </div> ) : null 
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        episodes: state.contentItems.episodes
    }
};

export default connect(mapStateToProps, { fetchEpisodes, clearSelectedEpisode })(SeasonsList);