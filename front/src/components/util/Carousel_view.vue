<template>
  <el-carousel height="24em">
    <div>
      <el-carousel-item v-for="(item, index) in carouselList" :key="item + index">
        <Carousel_item v-if="item != null"  :CarouselInfo="item" :ifShowVedio="item.IfShowVedio"></Carousel_item>
      </el-carousel-item>      
    </div>
  </el-carousel>
</template>

<script>
import Carousel_item from './Carousel_item.vue';
export default {
    name : "Carousel_view.vue",
    props : ["carouselList"],
    components : {
        Carousel_item
    },
    data() {
        return {}
    },
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>