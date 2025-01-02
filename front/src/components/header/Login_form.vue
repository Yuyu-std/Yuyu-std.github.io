<template>
  <div>
    <el-form :label-position="'left'" label-width="100px" :model="fromInfo">
        <el-form-item label="用户名/邮箱">
            <el-input v-model="fromInfo.key"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="fromInfo.password" show-password></el-input>
            <el-link style="float: right;" :underline="false"
                @click="registerVisible = true">注册账号</el-link>
            <i style="float: right; margin-left: 5px; margin-right: 5px">|</i>
            <el-link style="float: right;" :underline="false"
                @click="refindVisible = true">找回密码</el-link>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
    </el-form>

    <el-dialog title="找回密码" :visible.sync="refindVisible" width="31em" append-to-body>
        <Refind_form></Refind_form>
    </el-dialog>
    <el-dialog title="注册账户" :visible.sync="registerVisible" width="31em" append-to-body>
        <Register_form></Register_form>
    </el-dialog>
  </div>
</template>

<script>
import Refind_form from './Refind_form.vue';
import Register_form from './Register_form.vue';
export default {
    name : "Login_form.vue",
    components : {
        Refind_form, Register_form
    },
    data() {
        return {
            fromInfo : {
                key : "",
                password : ""
            },
            refindVisible :false,
            registerVisible : false
        }
    },
    methods : {
        submitForm() {
            this.$api.user.Login(this, this.fromInfo);
        }
    }
}
</script>

<style>

</style>