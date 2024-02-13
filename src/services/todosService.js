import {apiService} from "./apiService";
import {urls} from "../constsnts/urls";

const todosService ={

    getAll: () => apiService.get(urls.todos)

}


export {
    todosService
}