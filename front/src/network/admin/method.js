import inter from './interface';

export default {
    createVedio, showVedio, editVedio
}

function createVedio( self, data ) {
    inter.createVedio(data).then(res => {
        res = res.data
        if(res.Code == 0) {
            self.$message.error("创建失败..."); return;
        }
        self.$message.success("创建成功 :)");
        setTimeout(function(){
            top.document.location.reload();
        }, 700);
    }).catch(err => {
        self.$message.error("创建失败..."); return;
    })
}

function showVedio( self ) {
    return inter.showVedio().then(res => {
        res = res.data
        if(res.Code == 0) {
            self.$message.error("获取失败..."); return null;
        }
        return res.Data
    }).catch(err => {
        self.$message.error("获取失败..."); return null;
    })
}

function editVedio( self, data ) {
    return inter.editVedio(data).then(res => {
        res = res.data
        if(res.Code == 0) {
            self.$message.error("更新失败..."); return null;
        }
        self.$message.success("更新成功...");  return null;
    }).catch(err => {
        self.$message.error("更新失败..."); return null;
    })
}