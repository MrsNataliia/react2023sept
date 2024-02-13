import axios from "axios";
import {baseURL} from "../constsnts/urls";

const apiService=axios.create({baseURL});


export {
    apiService
}

