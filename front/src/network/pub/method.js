import inter from './interface';

export default {
    ShowIndex, VedioType, ShowCarousel
}

function ShowIndex( self ) {
    return inter.ShowIndex().then(res => {
        res = res.data
        if(res.Code == 0) {
            self.$message.error("获取失败..."); return null;
        }
        return res.Data
    }).catch(err => {
        self.$message.error("获取失败..."); return null;
    })
}


function VedioType( self ) {
    return inter.VedioType().then(res => {
        res = res.data
        if(res.Code == 0) {
            self.$message.error("获取失败..."); return null;
        }
        return res.Data
    }).catch(err => {
        self.$message.error("获取失败..."); return null;
    })
}

function ShowCarousel( self ) {
    return inter.ShowCarousel().then(res => {
        res = res.data
        if(res.Code == 0) {
            self.$message.error("获取失败..."); return null;
        }
        return res.Data
    }).catch(err => {
        self.$message.error("获取失败..."); return null;
    })
}