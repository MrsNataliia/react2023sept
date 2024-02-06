import React, {useEffect, useState} from 'react';
import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";
import css from './Posts.module.css'
import {PostDetails} from "../PostDetails/PostDetails";



const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null)

    const click = async (postId) => {
        const {data} = await postService.getById(postId);
        setPostDetails(data)
    }


    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div className={css.main}>

        <div className={css.Posts}>
            {posts.map(post => <Post key={post.id} post={post} click={click}/>)}

        </div>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }

        </div>

);
};





                    export {Posts};