import React from 'react';
import css from './Launch.module.css'

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div>
            <div className={css.launch}>
                <h3>{mission_name}</h3>
                <h4>{launch_year}</h4>
                <img src={mission_patch_small} alt={mission_name}/>

            </div>
        </div>
    );
};

export {Launch};