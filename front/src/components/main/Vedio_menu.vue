<template>
  <div class="total-menu">
    <el-empty v-if="menuInfo == null || menuInfo.length == 0" 
        description="这里空空如也哦" style="width: 100%;"></el-empty>
    <Vedio_item
        class="videoItem" v-for="(item, index) in menuInfo" ref="video_item"
        :key="index + 'vedioItem112233'"
        :VedioInfo="item"
    ></Vedio_item>
  </div>
</template>

<script>
import Vedio_item from '../util/Vedio_item.vue';
export default {
    props : ["menuInfo"],
    components : {
        Vedio_item
    }
}
</script>

<style scoped>
.total-menu {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.total-menu > i {
  width: 10em;
  max-width: 270px;
  min-width: 70px;
  margin-right: 5px;
}
</style>