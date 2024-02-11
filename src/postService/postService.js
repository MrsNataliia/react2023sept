import {apiService} from "./apiService";
import {urls} from "../constsnts/urls";



const  postService = {
    getAll: () => apiService(urls.posts),
    create: (data) => apiService.post(urls.posts, data)
}

export {
    postService
}