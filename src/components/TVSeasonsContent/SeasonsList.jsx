import React, { useState } from 'react';
import Select from 'react-select';
import EpisodeComponent from './EpisodeComponent';

import './SeasonsList.css';

const SeasonsList = ({
    tvId,
    seasons,
    fetchEpisodes,
    episodes,
    clearSelectedEpisode
}) => {
    const getOptions = () => {
        let options = [];
        seasons.forEach(season => (options = [...options, { value: 'Season ' + season.season_number, label: 'Season ' + season.season_number, number: season.season_number }]))
        return options;
    };
    const [activeSeason, setActiveSeason] = useState(getOptions()[0]);
    const [selectedEpisode, setSelectedEpisode] = useState(null);

    const onSeasonClick = (item) => {
        setSelectedEpisode(null);
        clearSelectedEpisode();
        setActiveSeason(item);
        fetchEpisodes(tvId, item.number);
    };

    const onSelectEpisode = (id) => {
        const selected = episodes.find(episode => episode.id === id);
        setSelectedEpisode(selected);
    };

    return (
        <>
            <div>
                <Select
                    value={activeSeason}
                    isSearchable={false}
                    options={getOptions()}
                    onChange={value => onSeasonClick(value)}
                    components={{ IndicatorSeparator: () => null }}
                />
            </div>
            {episodes.length ? <EpisodeComponent data={episodes} onSelectEpisode={onSelectEpisode} /> : null}
            {selectedEpisode ? (
                <div className="selected_episode">
                    <h3>{selectedEpisode.name}</h3>
                    <p>{selectedEpisode.overview}</p>
                </div>) : null
            }
        </>
    );
};

export default SeasonsList;
