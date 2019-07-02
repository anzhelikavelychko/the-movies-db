import React from 'react';

const SeasonComponent = ({ season, onSeasonClick }) => {
   
    return <div onClick={() => onSeasonClick(season.season_number)}>{season.name} </div>
};

export default SeasonComponent;