import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user

    const navigate =useNavigate()

    return (
        <div>
            <div>id:{id} - {name}</div>
            <button onClick={()=>navigate(`${id}`)}>User details</button>

        </div>
    );
};

export {User};