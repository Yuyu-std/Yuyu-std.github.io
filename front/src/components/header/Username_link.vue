<!-- 
    用户标签栏组件
 -->
<template>
  <div style="float: right;">
    <el-dropdown  @command="handleCommand">
        <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu>
            <el-dropdown-item v-if="root == 0" command="admin">控制台</el-dropdown-item>
            <el-dropdown-item command="changepwd">修改密码</el-dropdown-item>
            <el-dropdown-item command="exit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <el-dialog title="修改密码" :visible.sync="changepwd" width="31em">
        <ChangePwd_form></ChangePwd_form>
    </el-dialog>
  </div>
</template>

<script>
import ChangePwd_form from './ChangePwd_form.vue';
export default {
    name : "Username_link.veu",
    components : {
        ChangePwd_form
    },
    data() {
        return {
            username : localStorage.getItem("username"),
            root : localStorage.getItem("type"),
            changepwd : false
        }
    },
    methods : {
        handleCommand( command ) {
            switch (command) {
                case "exit": {this.exitLog(); break;}
                case "changepwd": {this.changepwd = true; break;}
                case "admin": {this.jumpToAdmin(); break;}
            }
        },
        jumpToAdmin() {
            this.$router.push({name : "root"}).catch(err => {})
        },
        exitLog() {
            localStorage.setItem("username", "");
            localStorage.setItem("token", "");
            localStorage.setItem("type", -1);
            setTimeout(function(){
                top.document.location.reload();
            }, 700);
        },
    }
}
</script>

<style>

</style>