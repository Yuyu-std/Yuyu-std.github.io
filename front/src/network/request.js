/*引入axios*/
import axios from 'axios'
const request = axios.create({
    baseURL: "http://wxns9k.natappfree.cc",
    withCredentials: true // 表示请求可以携带cookie
})
export default request