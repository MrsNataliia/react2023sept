import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, address:{street, suite, city}, phone, website} = userDetails


    const navigate = useNavigate()


    return (
        <div>
            <h2>User details</h2>
            <ul>
                <li>id:{id}</li>
                <li>name:{name}</li>
                <li>username: {username}</li>
                <li>email: {email}</li>
                <ul>Address:
                    <li>street: {street}</li>
                    <li>suite: {suite}</li>
                    <li>city: {city}</li>
                </ul>
                <li>phone: {phone}</li>
                <li>website: {website}</li>
                <button onClick={()=> navigate('posts')}>post of current user</button>

            </ul>
        </div>
    );
};

export {UserDetails};