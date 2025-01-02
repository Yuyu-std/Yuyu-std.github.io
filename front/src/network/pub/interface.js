import request from '../request';

export default {
    ShowIndex, VedioType
}

export function ShowIndex() {
    return request({
        method: 'GET',
        url: '/showIndex',
    })
}

export function VedioType() {
    return request({
        method: 'GET',
        url: '/vedioType',
    })
}