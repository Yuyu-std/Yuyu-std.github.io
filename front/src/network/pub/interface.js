import request from '../request';

export default {
    ShowIndex, VedioType, ShowCarousel
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

export function ShowCarousel() {
    return request({
        method: 'GET',
        url: '/showCarousel',
    })
}