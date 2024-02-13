import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = () => {

    const {state: {postId}} =useLocation();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(({data})=> setPost(data))
    }, [postId]);


    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {Posts};