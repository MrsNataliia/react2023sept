import {apiService} from "./apiService";
import {urls} from "../constsnts/urls";

const commentsService ={

    getAll: ()=> apiService.get(urls.comments)
}

export {
    commentsService
}