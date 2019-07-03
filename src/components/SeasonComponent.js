import React from 'react';

const SeasonComponent = ({ season, onSeasonClick }) => {
   
    return <div onClick={() => onSeasonClick(season.season_number)}> Season {season.season_number} </div>
};

export default SeasonComponent;