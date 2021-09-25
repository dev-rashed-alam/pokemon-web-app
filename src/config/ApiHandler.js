import axios from "axios";
import {backendServerUrl} from "./Config";

class ApiHandler {
    static getApi(urlSegment) {
        let url = backendServerUrl + urlSegment;
        return new Promise((resolve, reject) => {
            axios.get(url).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

export default ApiHandler