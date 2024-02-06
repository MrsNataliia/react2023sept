import React from 'react';
import css from './Post.module.css';


const Post = ({post,click}) => {
    const {id, title} = post;
    return (
        <div className={css.Post}>
            <p>id: {id} </p>
            <p>title: {title}</p>
            <button onClick={()=>click(id)}>Details</button>
        </div>
    );
};

export {Post};