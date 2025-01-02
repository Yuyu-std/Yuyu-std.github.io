<!-- 
  登录账户按钮组件
 -->
<template>
  <div class="login-btn">
    <el-button type="info" @click="dialogVisible=true" round>登录账户</el-button>

    <el-dialog title="账户登录" :visible.sync="dialogVisible" width="27em">
      <Login_form></Login_form>
    </el-dialog>
  </div>
</template>

<script>
import Login_form from './Login_form.vue';
export default {
    name : "Login_btn.vue",
    components : {
        Login_form,
    },
    data() {
        return {
            dialogVisible : false
        }
    }
}
</script>

<style>
.login-btn {
    float : right;
}
</style>