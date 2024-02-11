import React, {useEffect, useState} from 'react';

import {postService} from "../postService/postService";
import {Posts} from "./Posts";
import {PostForm} from "./PostForm";

const PostContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))

    }, []);
    return (
        <div>
            <div>
                <PostForm setPosts={setPosts}/>
                <hr/>
                <Posts posts={posts}/>
            </div>
        </div>
    );
};

export {PostContainer};