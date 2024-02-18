import React, {useEffect, useState} from 'react';

import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getById(postId).then(({data})=>setComments(data))
    }, [postId]);

    return (
        <div>
            <h3>Comments:</h3>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};