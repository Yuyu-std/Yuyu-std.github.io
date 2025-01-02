import request from '../request';

export default {
    createVedio, showVedio, editVedio
}

export function createVedio(data) {
    return request({
        method: 'POST',
        url: '/root/createVedio',
        data : data,
        headers: {
            'Authorization' : localStorage.getItem("token")
        }
    })
}

export function showVedio() {
    return request({
        method: 'GET',
        url: '/root/showVedio',
        headers: {
            'Authorization' : localStorage.getItem("token")
        }
    })
}

export function editVedio(data) {
    return request({
        method: 'POST',
        url: '/root/editVedio',
        data : data,
        headers: {
            'Authorization' : localStorage.getItem("token")
        }
    })
}