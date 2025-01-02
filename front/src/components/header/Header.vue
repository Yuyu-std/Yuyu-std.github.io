<!-- 
  顶部上边栏的主文件 
-->
<template>
  <div class="top-head">
    <Search_bar></Search_bar>
    <Login_Btn v-if="username == '' || username == null"></Login_Btn>
    <Username_link v-else :username="username"></Username_link>
  </div>
</template>

<script>
import Search_bar from './Search_bar.vue';
import Login_Btn from './Login_btn.vue';
import Username_link from './Username_link.vue';
export default {
  name : "Header.vue",
  components : {
    Search_bar, Login_Btn, Username_link
  },
  data() {
      return {
        username : localStorage.getItem("username"),
      }
  },
}
</script>

<style>
.top-head {
    height: 97%;
    border-bottom-style: solid;
    border-bottom-color: #C0C4CC;
    border-bottom-width: 1px;
}
</style>