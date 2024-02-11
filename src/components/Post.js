import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <h3>id: {id} {title}</h3>
            <div>userId: {userId}</div>
            <div>{body}</div>

        </div>
    );
};

export {Post};