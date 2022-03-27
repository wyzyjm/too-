import axios from "axios"
import { message } from "antd"
const http = axios.create({})

function ajax(url, type = "GET", data) {
    return new Promise((resolve, reject) => {
        let promise = null
        if (type === "GET") {
            promise = http.get(url, {
                params: data
            })
        } else {
            promise = http.post(url, data)
        }
        // 统一处理http请求异常, 外面就不用再 tryCatch了
        promise
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                message.error("request error", error.message)
            })
    })
}

export default ajax
