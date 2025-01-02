import inter from './interface';

export default {
    Login
}

function Login( self, data ) {
    inter.Login(data).then(res => {
        res = res.data;
        if(res.Code == 0) {
            self.$message.error("账号或密码错误..."); return;
        }
        self.$message.success("登录成功 :)");
        res = res.Data
        localStorage.setItem("token", res.token)
        localStorage.setItem("username", res.username)
        localStorage.setItem("type", res.type)
        
        setTimeout(function(){
            top.document.location.reload();
        }, 700);
    }).catch(err => {
        self.$message.error("账号或密码错误..."); return;
    })
}