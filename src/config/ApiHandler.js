import axios from "axios";

class ApiHandler {
    static getApi(url) {
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