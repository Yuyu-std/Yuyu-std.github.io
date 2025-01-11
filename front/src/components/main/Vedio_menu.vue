<template>
  <div class="total-menu">
    <el-empty v-if="menuInfo == null || menuInfo.length == 0" 
        description="这里空空如也哦" style="width: 100%;"></el-empty>
    <Vedio_item
        class="videoItem" v-for="(item, index) in menuInfo" ref="video_item"
        :key="index + 'vedioItem112233'" :TypeId="item.TypeId"
        :VedioInfo="item"
    ></Vedio_item>
    <i v-for="i in 6" :key="i + '<i>'" :class="emptyClass"></i>
  </div>
</template>

<script>
import Vedio_item from '../util/Vedio_item.vue';
export default {
    props : ["menuInfo", "vedioType"],
    components : {
        Vedio_item
    },
    data() {
      return {
        emptyClass : ""
      }
    },
    created() {
      if(this.vedioType == 0) this.emptyClass = "vedioEmpty";
      else this.emptyClass = "classEmpty"
    }
}
</script>

<style>
.total-menu {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.vedioEmpty {
  width: 10em;
  max-width: 270px;
  min-width: 70px;
  margin-right: 5px;
}

.classEmpty {
  width: 18em;
  aspect-ratio: 2/1;
  margin-top:10px;
  max-width: 3000px;
}
</style>