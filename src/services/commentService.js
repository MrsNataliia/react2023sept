import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {

    getById: (postId) => apiService.get(urls.comments, {params:{postId}})
}

export {
    commentService
}