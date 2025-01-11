<template>
    <div>
      <el-tabs v-model="activeName" style="margin-top: 8px;">
          <el-tab-pane label="影视管理" name="first">
              <VideoAdder></VideoAdder>
              <VideoContro></VideoContro>
          </el-tab-pane>
          <el-tab-pane label="用户管理" name="second"></el-tab-pane>
          <el-tab-pane label="轮播图管理" name="third">
            <Carousel_contro></Carousel_contro>
          </el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script>
  import VideoAdder from './Vedio_adder.vue'
  import VideoContro from './Vedio_contro.vue'
  import Carousel_contro from './Carousel_contro.vue';
  export default {
      components : {
        VideoContro, VideoAdder, Carousel_contro
      },
      data() {
          return {
           activeName : "first"   
          }
      }
  }
  </script>
  
  <style>
  
  </style>