import {apiService} from "./apiService";
import {urls} from "../constsnts/urls";

const albumsService = {

    getAll: () => apiService.get(urls.albums)
}

export {
    albumsService
}