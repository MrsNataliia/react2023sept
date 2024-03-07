import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {episodeService} from "../../../services";

const Episodes = () => {
    const [episodeRes, setEpisodeRes] = useState({prev: null, next: null, results: []})
    const [query, SetQuery] = useSearchParams({page: '1'})

    // useEffect(() => {
    //     episodeService.getAll(page).then(({data}) => setEpisodeRes(()=>{
    //         const {info: {prev, next}, results} = data
    //         return{
    //             prev,
    //             next,
    //             results
    //         }
    //     }))
    // }, []);
    return (
        <div>
            Episodes
        </div>
    );
};

export {Episodes};