/*引入axios*/
import axios from 'axios'
const request = axios.create({
    baseURL: "http://10.252.114.213:8888",
    withCredentials: true // 表示请求可以携带cookie
})
export default request