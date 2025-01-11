import request from '../request';

export default {
    Login, GetPlayList
}

export function Login(data) {
    return request({
        method: 'POST',
        url: '/login',
        data : data
    })
}

export function GetPlayList(data) {
    return request({
        method: 'POST',
        headers: {
            'Authorization' : localStorage.getItem("token")
        },
        url: '/user/getPlayList',
        data : data
    })
}