import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../services/postService";
import {PostDetails} from "../components/PostsContainer/PostDetails";
import {Comments} from "../components/CommentsContainer/Comments";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null)
    const {postId} = useParams()

    useEffect(() => {
        postService.getById(postId).then(({data})=>setPostDetails(data))

    }, [postId]);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            {postDetails && <Comments postId={postId}/>}

        </div>
    );
};

export {PostDetailsPage};