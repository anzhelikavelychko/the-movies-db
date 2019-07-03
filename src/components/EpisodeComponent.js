import React, { useState } from 'react';
import Select from 'react-select';

const EpisodeComponent = ({ data, onSelectEpisode }) => {

    const getOptions = () => {
        let options = [];
        data.forEach( episode => (options = [ ...options, { value: 'Episode ' + episode.episode_number, label: 'Episode ' + episode.episode_number, id: episode.id}]))
        return options;
    };

   const [activeEpisode, setActiveEpisode] = useState(getOptions()[0]);

   const onChangeActiveEpisode = (item) => {
       setActiveEpisode(item);
       onSelectEpisode(item.id);
   };
    return (
        <div className="episode_detail">
            <Select
                value={activeEpisode}
                isSearchable={false}
                options={getOptions()}
                onChange={value => onChangeActiveEpisode(value)}
                components={{ IndicatorSeparator: () => null }}
            />
        </div>
    );
};

export default EpisodeComponent;