import React, {useEffect, useState} from 'react';
import {launchService} from "../services/launchService";
import {Launch} from "../Launch/Launch";
import css from "./Launches.module.css";


const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(({data}) => {

            const launchFilter = data.filter(year => year.launch_year !=='2020')

            setLaunches(launchFilter)
        });
    }, []);

    return (

        <div className={css.launches}>
            {launches.map(launch => <Launch key={launch.index} launch={launch}/>)}
        </div>

    );
};

export {Launches};