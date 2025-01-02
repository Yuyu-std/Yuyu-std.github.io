<template>
  <div id="app">
    <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
              <Header></Header>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './components/aside/Aside.vue';
import Header from './components/header/Header.vue';
export default {
  name : "App.vue",
  components : {
    Aside, Header
  }
}

</script>

<style>
  .el-header {
    color: #333;
    line-height: 60px;
    background-color: #f7f8f9;
    min-width: 700px;
  }
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100vh;
    border-right-style: solid;
    border-right-color: #C0C4CC;
    border-right-width: 1px;

  }
  .el-main {
    color: #333;
    background-color: #f7f8f9;
  }
</style>

