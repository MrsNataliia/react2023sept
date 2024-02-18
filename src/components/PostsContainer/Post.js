import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post

    const navigate = useNavigate()

    return (
        <div>
            <div>{title}</div>
            <button onClick={()=>navigate(`${id}`)}>post-details</button>
        </div>
    );
};

export {Post};